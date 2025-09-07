import type { EnemyDetachment, EnemyUnitRef } from '../types'
import { StratPhase, TurnWindow } from '../types'

export const ENEMY_CORE_CSM: EnemyUnitRef[] = [
  {
    name: 'Abaddon the Despoiler',
    threat: 'Durable melee character with reroll aura.',
    tags: ['durable', 'melee'],
  },
  {
    name: 'Obliterators',
    threat: 'High damage ranged attacks, teleport.',
  },
  {
    name: 'Chaos Spawn',
    threat: 'Fast objective grabbers.',
    tags: ['fast'],
  },
]

export const ENEMY_DETS_CSM: EnemyDetachment[] = [
  {
    name: 'Slaves to Darkness',
    adds: [
      {
        name: 'Chosen',
        threat: 'Elite infantry with strong melee.',
        tags: ['melee'],
      },
    ],
    defaultTraits: [
      {
        name: 'Dark Pact',
        phase: StratPhase.Any,
        window: TurnWindow.Any,
        tip: 'Enhance attacks at the risk of mortal wounds.',
        tags: ['melee-brick'],
      },
    ],
  },
  {
    name: 'Iron Warriors',
    adds: [
      {
        name: 'Havocs',
        threat: 'Heavy weapon squad excels at killing vehicles.',
      },
    ],
    defaultTraits: [
      {
        name: 'Bitter Enmity',
        phase: StratPhase.Shooting,
        window: TurnWindow.Opponent,
        tip: 'Punish attacking their fortifications.',
        tags: ['long-range-at'],
      },
    ],
  },
]
