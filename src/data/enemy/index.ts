import type { EnemyDetachment, EnemyUnitRef } from '../types'
import { EnemyFaction } from '../types'
import { ENEMY_CORE_CSM, ENEMY_DETS_CSM } from './csm'

export const ENEMY_CORE: Record<EnemyFaction, EnemyUnitRef[]> = {
  [EnemyFaction.CSM]: ENEMY_CORE_CSM,
  [EnemyFaction.SM]: [],
  [EnemyFaction.NECRONS]: [],
  [EnemyFaction.TYRANIDS]: [],
}

export const ENEMY_DETS: Record<EnemyFaction, EnemyDetachment[]> = {
  [EnemyFaction.CSM]: ENEMY_DETS_CSM,
  [EnemyFaction.SM]: [],
  [EnemyFaction.NECRONS]: [],
  [EnemyFaction.TYRANIDS]: [],
}
