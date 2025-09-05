export type AdvicePhase = 'any' | 'command' | 'movement' | 'shooting' | 'charge' | 'fight' | 'end'
export type AdviceWindow = 'my' | 'opp' | 'both'

export type ScopedTags = {
  tags: string[]
  side?: 'ours' | 'enemy' | 'any'
}

export type AdviceCondition = {
  phase?: AdvicePhase | AdvicePhase[]
  window?: AdviceWindow
  requireAnyTags?: ScopedTags
  requireAllTags?: ScopedTags
  forbidTags?: ScopedTags
  minCP?: number
  maxTurn?: number
  minTurn?: number
}

export type AdviceCard = {
  id: string
  title: string
  body: string
  phase: AdvicePhase
  window: AdviceWindow
  importance: 1 | 2 | 3
  oncePerGame?: boolean
  conditions: AdviceCondition
  refs?: string[]
}
