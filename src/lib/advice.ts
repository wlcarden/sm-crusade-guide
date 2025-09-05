import { TAG_META } from '@/data/tags'
import type { AdviceCard, AdviceCondition, AdvicePhase, AdviceWindow, ScopedTags } from '@/data/advice/types'

export type AdviceContext = {
  forces: { ours: Set<string>; enemy: Set<string> }
  ambient: Set<string>
  phase: AdvicePhase
  window: AdviceWindow
  turn: number
  cp: number
}

export function matches(cond: AdviceCondition, ctx: AdviceContext): boolean {
  if (cond.phase) {
    const list = Array.isArray(cond.phase) ? cond.phase : [cond.phase]
    if (!list.includes(ctx.phase)) return false
  }
  if (cond.window && cond.window !== 'both' && cond.window !== ctx.window) return false
  if (typeof cond.minTurn === 'number' && ctx.turn < cond.minTurn) return false
  if (typeof cond.maxTurn === 'number' && ctx.turn > cond.maxTurn) return false
  if (typeof cond.minCP === 'number' && ctx.cp < cond.minCP) return false

  if (cond.requireAllTags && !hasAll(cond.requireAllTags, ctx)) return false
  if (cond.requireAnyTags && !hasAny(cond.requireAnyTags, ctx)) return false
  if (cond.forbidTags && hasAny(cond.forbidTags, ctx)) return false

  return true
}

export function scoreAdvice(card: AdviceCard, ctx: AdviceContext): number {
  let score = card.importance
  if (card.phase === ctx.phase || card.phase === 'any') score += 0.5
  const related = [
    ...(card.conditions.requireAllTags?.tags ?? []),
    ...(card.conditions.requireAnyTags?.tags ?? []),
  ]
  for (const k of related) {
    const sev = TAG_META[k]?.severity ?? 0
    if (sev) score += sev * 0.25
  }
  return score
}

function pickSets(side: ScopedTags['side'] | undefined, ctx: AdviceContext): Set<string>[] {
  if (side === 'ours') return [ctx.forces.ours]
  if (side === 'enemy') return [ctx.forces.enemy]
  return [ctx.forces.ours, ctx.forces.enemy, ctx.ambient]
}

function hasAll(scoped: ScopedTags, ctx: AdviceContext): boolean {
  const sets = pickSets(scoped.side, ctx)
  return scoped.tags.every(t => sets.some(s => s.has(t)))
}

function hasAny(scoped: ScopedTags, ctx: AdviceContext): boolean {
  const sets = pickSets(scoped.side, ctx)
  return scoped.tags.some(t => sets.some(s => s.has(t)))
}

export function selectAdvice(cards: AdviceCard[], ctx: AdviceContext, limit = 6): AdviceCard[] {
  const eligible = cards.filter(c => matches(c.conditions, ctx))
  return eligible.sort((a, b) => scoreAdvice(b, ctx) - scoreAdvice(a, ctx)).slice(0, limit)
}
