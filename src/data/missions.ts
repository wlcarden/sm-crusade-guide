import type { Deployment, MissionRule, Primary } from './types'
import { MissionTag } from './types'

export const MISSION_RULES: MissionRule[] = [
  {
    name: 'Delayed Reserves',
    tip: 'Reserves cannot arrive until the third round.',
    tags: [MissionTag.Tricksy],
  },
  {
    name: 'Hidden Supplies',
    tip: 'One objective marker is hidden until round 2.',
    tags: [MissionTag.Action],
  },
  {
    name: 'Swift Sweep',
    tip: 'Advance before scoring primary in round 1.',
    tags: [MissionTag.Mobility],
  },
]

export const PRIMARY_MISSIONS: Primary[] = [
  {
    name: 'Take and Hold',
    tip: 'Score for controlling objectives at end of turn.',
    tags: [MissionTag.Hold],
  },
  {
    name: 'Seek and Destroy',
    tip: 'Score for destroying enemy units each battle round.',
    tags: [MissionTag.Kill],
  },
  {
    name: 'Data Intercept',
    tip: 'Perform action on objectives to score progressively.',
    tags: [MissionTag.Action],
  },
]

export const DEPLOYMENTS: Deployment[] = [
  {
    name: 'Dawn of War',
    tip: '12" no-man\u2019s land across the center.',
    tags: [MissionTag.Mobility],
  },
  {
    name: 'Search and Destroy',
    tip: 'Diagonal deployment with 9" gap.',
    tags: [MissionTag.Hold],
  },
  {
    name: 'Hammer and Anvil',
    tip: 'Long table edges with deep zones.',
    tags: [MissionTag.Kill],
  },
]
