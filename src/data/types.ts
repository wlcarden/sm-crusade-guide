export const MissionTag = {
  Hold: 'hold',
  Kill: 'kill',
  Action: 'action',
  Mobility: 'mobility',
  Tricksy: 'tricksy',
} as const
export type MissionTag = (typeof MissionTag)[keyof typeof MissionTag]

export const EnemyTag = {
  Durable: 'durable',
  Melee: 'melee',
  Shooting: 'shooting',
  Fast: 'fast',
  Psyker: 'psyker',
} as const
export type EnemyTag = (typeof EnemyTag)[keyof typeof EnemyTag]

export const StratPhase = {
  Movement: 'movement',
  Shooting: 'shooting',
  Charge: 'charge',
  Fight: 'fight',
  Any: 'any',
} as const
export type StratPhase = (typeof StratPhase)[keyof typeof StratPhase]

export const TurnWindow = {
  Yours: 'yours',
  Opponent: 'opponent',
  Any: 'any',
} as const
export type TurnWindow = (typeof TurnWindow)[keyof typeof TurnWindow]

export interface MissionRule {
  name: string
  tip: string
  tags: MissionTag[]
}

export interface Primary {
  name: string
  tip: string
  tags: MissionTag[]
}

export interface Deployment {
  name: string
  tip: string
  tags: MissionTag[]
}

export const EnemyFaction = {
  CSM: 'CSM',
  SM: 'SM',
  NECRONS: 'NECRONS',
  TYRANIDS: 'TYRANIDS',
} as const
export type EnemyFaction = (typeof EnemyFaction)[keyof typeof EnemyFaction]

export interface EnemyUnitRef {
  name: string
  threat: string
  tags: EnemyTag[]
}

export interface Stratagem {
  name: string
  phase: StratPhase
  window: TurnWindow
  tip: string
  tags: EnemyTag[]
}

export interface EnemyDetachment {
  name: string
  adds: EnemyUnitRef[]
  defaultTraits: Stratagem[]
}
