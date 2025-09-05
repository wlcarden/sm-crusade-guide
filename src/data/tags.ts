export type TagCategory = 'mission' | 'unit' | 'board' | 'tempo' | 'risk'

export type TagMeta = {
  key: string
  label?: string
  category: TagCategory
  severity?: 1 | 2 | 3
  synonyms?: string[]
}

export const TAG_META: Record<string, TagMeta> = {
  // --- unit capabilities / archetype ---
  'deep-strike':       { key: 'deep-strike', category: 'unit', severity: 3, synonyms: ['reinforcements'] },
  'indirect':          { key: 'indirect', category: 'unit', severity: 3 },
  'long-range-at':     { key: 'long-range-at', category: 'unit', severity: 3 },
  'fast-melee':        { key: 'fast-melee', category: 'unit', severity: 2 },
  'melee-brick':       { key: 'melee-brick', category: 'unit', severity: 3 },
  'transport':         { key: 'transport', category: 'unit', severity: 2 },
  'transport-push':    { key: 'transport-push', category: 'unit', severity: 2 },
  'gunline':           { key: 'gunline', category: 'unit', severity: 2 },
  'vehicle-wall':      { key: 'vehicle-wall', category: 'unit', severity: 2 },
  'stealth':           { key: 'stealth', category: 'unit', severity: 1 },
  'fall-back-charge':  { key: 'fall-back-charge', category: 'unit', severity: 2 },
  'post-fight-move':   { key: 'post-fight-move', category: 'unit', severity: 2 },
  'ignores-cover':     { key: 'ignores-cover', category: 'unit', severity: 2 },
  'mortal-wounds':     { key: 'mortal-wounds', category: 'unit', severity: 2 },
  'high-invul':        { key: 'high-invul', category: 'unit', severity: 2 },
  '2plus-save':        { key: '2plus-save', category: 'unit', severity: 2 },
  'minus1-damage':     { key: 'minus1-damage', category: 'unit', severity: 2 },
  'return-models':     { key: 'return-models', category: 'unit', severity: 2 },
  'advance-and-charge':{ key: 'advance-and-charge', category: 'unit', severity: 2 },

  // --- mission properties ---
  'action-pressure':   { key: 'action-pressure', category: 'mission', severity: 2 },
  'late-spike':        { key: 'late-spike', category: 'mission', severity: 2 },
  'center':            { key: 'center', category: 'mission', severity: 1 },
  'home-obj':          { key: 'home-obj', category: 'mission', severity: 1 },
  'redeploy':          { key: 'redeploy', category: 'mission', severity: 1 },
  'reserves-boost':    { key: 'reserves-boost', category: 'mission', severity: 1 },
  'short-dist':        { key: 'short-dist', category: 'mission', severity: 1 },
  'mid-dist':          { key: 'mid-dist', category: 'mission', severity: 1 },
  'long-dist':         { key: 'long-dist', category: 'mission', severity: 1 },

  // --- our capabilities (we’ll add toggles/inference later) ---
  'screening':         { key: 'screening', category: 'unit', severity: 3, synonyms: ['infiltrator-bubble'] },
  'countercharge':     { key: 'countercharge', category: 'unit', severity: 2 },
  'anti-tank':         { key: 'anti-tank', category: 'unit', severity: 3 },

  // --- tempo/board state (optional ambient tags) ---
  'cp-low':            { key: 'cp-low', category: 'tempo', severity: 2 },
  'behind-on-primaries': { key: 'behind-on-primaries', category: 'tempo', severity: 3 },
}

