import { CORE_STRATS } from './core'
import { GLADIUS_STRATS } from './space-marines/gladius'

export interface Stratagem {
  name: string
  cp: string
  phase: 'any' | 'command' | 'movement' | 'shooting' | 'charge' | 'fight' | 'end'
  window: 'my' | 'opp' | 'both'
  blurb: string
}

export const DETACHMENT_STRATS: Record<string, Stratagem[]> = {
  Gladius: GLADIUS_STRATS,
}

export function getStrats(detachment?: string): Stratagem[] {
  const detStrats = detachment ? DETACHMENT_STRATS[detachment] || [] : []
  return [...CORE_STRATS, ...detStrats]
}

export { CORE_STRATS }
