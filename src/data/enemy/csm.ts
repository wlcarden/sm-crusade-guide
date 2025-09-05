import type { EnemyDetachment, EnemyUnitRef } from '../types'
import { EnemyTag, StratPhase, TurnWindow } from '../types'

export const ENEMY_CORE_CSM: EnemyUnitRef[] = [
  {
    name: 'Abaddon the Despoiler',
    threat: 'Durable melee character with reroll aura.',
    tags: [EnemyTag.Durable, EnemyTag.Melee],
  },
  {
    name: 'Obliterators',
    threat: 'High damage ranged attacks, teleport.',
    tags: [EnemyTag.Shooting],
  },
  {
    name: 'Chaos Spawn',
    threat: 'Fast objective grabbers.',
    tags: [EnemyTag.Fast],
  },
]

export const ENEMY_DETS_CSM: EnemyDetachment[] = [
  {
    name: 'Slaves to Darkness',
    adds: [
      {
        name: 'Chosen',
        threat: 'Elite infantry with strong melee.',
        tags: [EnemyTag.Melee],
      },
    ],
    defaultTraits: [
      {
        name: 'Dark Pact',
        phase: StratPhase.Any,
        window: TurnWindow.Any,
        tip: 'Enhance attacks at the risk of mortal wounds.',
        tags: [EnemyTag.Melee],
      },
    ],
  },
  {
    name: 'Iron Warriors',
    adds: [
      {
        name: 'Havocs',
        threat: 'Heavy weapon squad excels at killing vehicles.',
        tags: [EnemyTag.Shooting],
      },
    ],
    defaultTraits: [
      {
        name: 'Bitter Enmity',
        phase: StratPhase.Shooting,
        window: TurnWindow.Opponent,
        tip: 'Punish attacking their fortifications.',
        tags: [EnemyTag.Shooting],
      },
    ],
  },
]
