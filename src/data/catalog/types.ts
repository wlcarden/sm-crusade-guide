type UnitTag = string

export type UnitRef = {
  key: string
  name: string
  faction: string
  tags: UnitTag[]
  detachmentKeys?: string[]
  wahapedia?: string
}

export type UnitCatalog = Record<string, UnitRef>
