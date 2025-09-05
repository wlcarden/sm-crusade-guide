import type { Stratagem } from './index'

export const CORE_STRATS: Stratagem[] = [
  {
    name: 'Command Re-roll',
    cp: 'var',
    phase: 'any',
    window: 'both',
    blurb: 'Re-roll a single dice roll.',
  },
  {
    name: 'Counter-offensive',
    cp: 'var',
    phase: 'fight',
    window: 'both',
    blurb: 'Fight with one of your units after an enemy unit has fought.',
  },
  {
    name: 'Insane Bravery',
    cp: 'var',
    phase: 'command',
    window: 'my',
    blurb: 'Auto-pass a Battle-shock test.',
  },
  {
    name: 'Go to Ground',
    cp: 'var',
    phase: 'shooting',
    window: 'opp',
    blurb: 'Improve a unit\'s Save characteristic when it is targeted.',
  },
  {
    name: 'Fire Overwatch',
    cp: 'var',
    phase: 'movement',
    window: 'opp',
    blurb: 'Shoot at an enemy unit when it makes a Normal, Advance, or Fall Back move.',
  },
]
