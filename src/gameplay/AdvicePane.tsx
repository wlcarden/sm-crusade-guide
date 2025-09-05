import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import type { AdviceCard } from '@/data/advice/types'
import type { AdviceContext } from '@/lib/advice'
import { selectAdvice } from '@/lib/advice'
import { getJSON, setJSON } from '@/lib/storage'

type AdvicePaneProps = {
  ctx: AdviceContext
  cards?: AdviceCard[]
  title?: string
  matchKey?: string
}

type CardState = {
  done: boolean
  snoozedUntilTurn?: number
  pinned: boolean
}

export default function AdvicePane({
  ctx,
  cards = [],
  title = 'Advice',
  matchKey = 'default',
}: AdvicePaneProps) {
  const base = React.useMemo(
    () => selectAdvice(cards, ctx, cards.length),
    [cards, ctx],
  )

  const [states, setStates] = React.useState<Record<string, CardState>>({})

  React.useEffect(() => {
    const loaded: Record<string, CardState> = {}
    for (const c of cards) {
      loaded[c.id] = getJSON<CardState>(
        `smcg.match.${matchKey}.advice.${c.id}`,
        { done: false, pinned: false },
      )
    }
    setStates(loaded)
  }, [cards, matchKey])

  function update(id: string, patch: Partial<CardState>) {
    setStates(prev => {
      const next = { ...prev, [id]: { ...prev[id], ...patch } }
      setJSON(`smcg.match.${matchKey}.advice.${id}`, next[id])
      return next
    })
  }

  function handleDone(id: string) {
    update(id, { done: true })
  }

  function handleSnooze(id: string, turns: number) {
    update(id, { snoozedUntilTurn: ctx.turn + turns })
  }

  function togglePin(id: string) {
    const current = states[id]?.pinned
    update(id, { pinned: !current })
  }

  const visible = React.useMemo(() => {
    const pinned: AdviceCard[] = []
    const rest: AdviceCard[] = []
    for (const c of base) {
      const st = states[c.id]
      if (st?.pinned) pinned.push(c)
      else rest.push(c)
    }
    const others = rest.filter(c => {
      const st = states[c.id]
      if (st?.done) return false
      if (typeof st?.snoozedUntilTurn === 'number' && ctx.turn < st.snoozedUntilTurn)
        return false
      return true
    })
    return [...pinned, ...others].slice(0, 6)
  }, [base, states, ctx.turn])

  const ctxTags = React.useMemo(
    () => new Set([...ctx.forces.ours, ...ctx.forces.enemy, ...ctx.ambient]),
    [ctx.forces.ours, ctx.forces.enemy, ctx.ambient],
  )

  return (
    <Card className="bg-zinc-800 text-white rounded-xl border-zinc-700">
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {visible.length === 0 ? (
          <div className="text-sm text-zinc-400">No advice yet for this phase/context.</div>
        ) : (
          <ul className="space-y-2">
            {visible.map(a => {
              const st = states[a.id] || { done: false, pinned: false }
              const related = new Set([
                ...(a.conditions.requireAllTags?.tags ?? []),
                ...(a.conditions.requireAnyTags?.tags ?? []),
              ])
              const matched = Array.from(related).filter(t => ctxTags.has(t))
              return (
                <li
                  key={a.id}
                  className="rounded-lg border border-zinc-700/70 bg-zinc-900/50 p-3"
                >
                  <div className="text-sm font-medium flex justify-between items-start">
                    <span>{a.title}</span>
                    <div className="flex gap-1 ml-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 text-xs"
                        onClick={() => handleDone(a.id)}
                        disabled={st.done}
                      >
                        Done
                      </Button>
                      <Select
                        defaultValue=""
                        onValueChange={v => v && handleSnooze(a.id, parseInt(v))}
                        className="h-6 text-xs bg-zinc-800 border-zinc-700 text-white"
                      >
                        <SelectItem value="">Snooze</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </Select>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 text-xs"
                        onClick={() => togglePin(a.id)}
                      >
                        {st.pinned ? 'Unpin' : 'Pin'}
                      </Button>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-300 mt-1">{a.body}</div>
                  {matched.length > 0 && (
                    <div className="mt-2 text-[10px] text-zinc-400 flex items-center gap-1 flex-wrap">
                      <span>Why shown:</span>
                      {matched.map(t => (
                        <Badge
                          key={t}
                          className="px-1 py-0 bg-zinc-700 border-zinc-600"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
