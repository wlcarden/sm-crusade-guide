import type { UnitCatalog } from './types'

export const CSM_CATALOG_PART: UnitCatalog = {
  'csm-accursed-cultists': {
    key: 'csm-accursed-cultists',
    name: 'Accursed Cultists',
    faction: 'Chaos Space Marines',
    tags: ['redeploy', 'fnp', 'horde-oc', 'on-shot-move'],
    wahapedia: '/factions/chaos-space-marines/Accursed-Cultists',
    evidence: [
      'Core: Feel No Pain 6+; Scouts 6" (pre-game move).',
      'Accursed Horde: horde move D6" toward nearest enemy when shot and models die.',
      'Large mixed unit (up to 16 models) with OC across many bodies.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Accursed-Cultists

  'csm-cultist-mob': {
    key: 'csm-cultist-mob',
    name: 'Cultist Mob',
    faction: 'Chaos Space Marines',
    tags: ['horde-oc', 'sticky-obj'],
    wahapedia: '/factions/chaos-space-marines/Cultist-Mob',
    evidence: [
      '10–20 cheap bodies provide high total OC for the cost.',
      'For the Dark Gods: objective stays controlled after leaving (sticky objective).'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Cultist-Mob

  'csm-forgefiend': {
    key: 'csm-forgefiend',
    name: 'Forgefiend',
    faction: 'Chaos Space Marines',
    tags: ['vehicle', 'walker', 'long-range-at', 'mortal-wounds'],
    wahapedia: '/factions/chaos-space-marines/Forgefiend',
    evidence: [
      'Keywords: VEHICLE, WALKER (Daemon Engine walker chassis).',
      '36" ectoplasma cannons (S10 D3) / 36" hades autocannons provide ranged AT pressure.',
      'Daemonic Ordnance: can grant guns Devastating Wounds for mortal-wound output.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Forgefiend

  'csm-havocs': {
    key: 'csm-havocs',
    name: 'Havocs',
    faction: 'Chaos Space Marines',
    tags: ['long-range-at'],
    wahapedia: '/factions/chaos-space-marines/Havocs',
    evidence: [
      'Heavy weapon options include 48" lascannon and krak missiles for long-range AT.',
      'Configured as a heavy weapon team for ranged anti-vehicle duty.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Havocs

  'csm-land-raider': {
    key: 'csm-land-raider',
    name: 'Chaos Land Raider',
    faction: 'Chaos Space Marines',
    tags: ['vehicle', 'transport', '2plus-save', 'durable', 'long-range-at'],
    wahapedia: '/factions/chaos-space-marines/Chaos-Land-Raider',
    evidence: [
      'Keywords include VEHICLE; datasheet has a TRANSPORT capacity line.',
      'Statline: tough tank chassis with Sv 2+ and high T/W.',
      'Twin soulshatter lascannons: 48" S12 D6+1 for long-range anti-tank.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Chaos-Land-Raider

  'csm-lord-discordant-on-helstalker': {
    key: 'csm-lord-discordant-on-helstalker',
    name: 'Lord Discordant On Helstalker',
    faction: 'Chaos Space Marines',
    tags: ['fast-melee', '2plus-save', 'high-invul', 'durable', 'mortal-wounds'],
    wahapedia: '/factions/chaos-space-marines/Lord-Discordant-On-Helstalker',
    evidence: [
      'Fast melee character on mount (M 14") with multiple melee profiles.',
      'Defenses: Sv 2+ and 4+ invulnerable save on a multi-wound chassis.',
      'Corrupt Machine Spirits (12"): within 12" of an enemy VEHICLE, deals D3+3 mortal wounds (start of your Shooting phase).'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Lord-Discordant-On-Helstalker

  'csm-obliterators': {
    key: 'csm-obliterators',
    name: 'Obliterators',
    faction: 'Chaos Space Marines',
    tags: ['deep-strike', '2plus-save', 'durable'],
    wahapedia: '/factions/chaos-space-marines/Obliterators',
    evidence: [
      'Core: Deep Strike for mid-game arrival.',
      'Heavy infantry with Sv 2+ and high T/W per model.',
      'No native Indirect Fire weapon profile on the datasheet (not tagged).'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Obliterators

  'csm-possessed': {
    key: 'csm-possessed',
    name: 'Possessed',
    faction: 'Chaos Space Marines',
    tags: ['fast-melee', 'mortal-wounds'],
    wahapedia: '/factions/chaos-space-marines/Possessed',
    evidence: [
      'M 9" melee-only shock unit built to close quickly.',
      'Unholy Bloodshed (once per battle): melee attacks gain Devastating Wounds (mortal wounds).'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Possessed

  'csm-raptors': {
    key: 'csm-raptors',
    name: 'Raptors',
    faction: 'Chaos Space Marines',
    tags: ['deep-strike', 'fast-melee', 'skirmish-units'],
    wahapedia: '/factions/chaos-space-marines/Raptors',
    evidence: [
      'Core: Deep Strike; Jump Pack (Fly) with M 12".',
      'Mobile melee pressure from fast infantry with close threat.',
      '5–10 models with OC 1 each—good traders for space and Actions.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Raptors

  'csm-rhino': {
    key: 'csm-rhino',
    name: 'Chaos Rhino',
    faction: 'Chaos Space Marines',
    tags: ['vehicle', 'transport'],
    wahapedia: '/factions/chaos-space-marines/Chaos-Rhino',
    evidence: [
      'Keywords include VEHICLE.',
      'TRANSPORT capacity line (12 Infantry) on the datasheet.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Chaos-Rhino

  'csm-terminator-squad': {
    key: 'csm-terminator-squad',
    name: 'Chaos Terminator Squad',
    faction: 'Chaos Space Marines',
    tags: ['deep-strike', '2plus-save', 'high-invul', 'durable', 'melee-brick'],
    wahapedia: '/factions/chaos-space-marines/Chaos-Terminator-Squad',
    evidence: [
      'Core: Deep Strike.',
      'Defenses: Sv 2+ and 4+ invulnerable on multi-wound models.',
      'Built to hold/push mid with heavy melee options and strong durability.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Chaos-Terminator-Squad

  'csm-vindicator': {
    key: 'csm-vindicator',
    name: 'Chaos Vindicator',
    faction: 'Chaos Space Marines',
    tags: ['vehicle', '2plus-save', 'durable', 'short-range-at', 'siege-at'],
    wahapedia: '/factions/chaos-space-marines/Chaos-Vindicator',
    evidence: [
      'Tank chassis with Sv 2+ and high T/W (durable brawler).',
      'Demolisher cannon: 24" S14 D6—short-range anti-tank punch.',
      'Primary role is close-range siege support rather than long-range fire.'
    ]
  }, // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Chaos-Vindicator

  'csm-warp-talons': {
    key: 'csm-warp-talons',
    name: 'Warp Talons',
    faction: 'Chaos Space Marines',
    tags: ['deep-strike', 'fast-melee', 'post-combat-extract'],
    wahapedia: '/factions/chaos-space-marines/Warp-Talons',
    evidence: [
      'Core: Deep Strike; Jump Pack (Fly) with M 12".',
      'Melee-only (warp claws) built to engage quickly.',
      'Warp Strike: after destroying a unit in melee and if not in engagement range, the unit is removed and placed into Strategic Reserves.'
    ]
  } // source: https://wahapedia.ru/wh40k10ed/factions/chaos-space-marines/Warp-Talons
}

