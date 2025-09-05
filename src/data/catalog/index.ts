import type { UnitRef, UnitCatalog } from './types'
import { CSM_CATALOG } from './csm'

export const CATALOG_BY_FACTION: Record<string, UnitCatalog> = {
  'Chaos Space Marines': CSM_CATALOG,
}

export function unitsForFaction(faction: string): UnitRef[] {
  const catalog = CATALOG_BY_FACTION[faction]
  return catalog ? Object.values(catalog) : []
}

export function getUnitByName(name: string, faction?: string): UnitRef | undefined {
  if (faction) {
    const catalog = CATALOG_BY_FACTION[faction]
    return catalog ? Object.values(catalog).find((u) => u.name === name) : undefined
  }
  for (const catalog of Object.values(CATALOG_BY_FACTION)) {
    const unit = Object.values(catalog).find((u) => u.name === name)
    if (unit) return unit
  }
  return undefined
}
