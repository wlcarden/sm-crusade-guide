import type { UnitRef, UnitCatalog } from './types'
import { CSM_CATALOG_PART } from './csm'

// Normalize unit names to improve lookup robustness.
// - Lowercase
// - Trim leading/trailing spaces
// - Collapse multiple spaces
// - Remove the word "the" at start
// - Remove dashes and extra punctuation
export function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/^the\s+/, '')
    .replace(/[-']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const CATALOG_PARTS_BY_FACTION: Record<string, UnitCatalog[]> = {
  CSM: [CSM_CATALOG_PART],
}

export function getFactionCatalogByName(faction: string): Map<string, UnitRef> {
  const parts = CATALOG_PARTS_BY_FACTION[faction] ?? []
  const map = new Map<string, UnitRef>()
  for (const part of parts) {
    for (const unit of Object.values(part)) {
      map.set(unit.name, unit)
      map.set(normalizeName(unit.name), unit)
    }
  }
  return map
}

