import { useState } from 'react'
import { ENEMY_CORE, ENEMY_DETS } from '@/data/enemy'
import type { EnemyDetachment, EnemyFaction, EnemyTag, EnemyUnitRef } from '@/data/types'
import { getFactionCatalogByName, normalizeName } from '@/data/catalog'
import type { UnitRef as CatalogUnit } from '@/data/catalog/types'
import { Select, SelectItem } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib'

interface EnemySelectorProps {
  onStart: (tags: EnemyTag[]) => void
}

export function EnemySelector({ onStart }: EnemySelectorProps) {
  const [faction, setFaction] = useState<EnemyFaction | ''>('')
  const [detachmentIndex, setDetachmentIndex] = useState<number | null>(null)
  const [selectedUnits, setSelectedUnits] = useState<string[]>([])
  const detachments: EnemyDetachment[] = faction ? ENEMY_DETS[faction] : []
  const detachment =
    detachmentIndex !== null ? detachments[detachmentIndex] : undefined

  const catalogUnitMap: Map<string, CatalogUnit> = faction
    ? getFactionCatalogByName(faction)
    : new Map()

  const baseCore: EnemyUnitRef[] = faction ? ENEMY_CORE[faction] : []

  interface EnemyUnitWithEvidence extends EnemyUnitRef {
    tags: EnemyTag[]
    evidence?: string[]
  }

  const coreUnits: EnemyUnitWithEvidence[] = baseCore.map((u) => {
    const cu =
      catalogUnitMap.get(u.name) || catalogUnitMap.get(normalizeName(u.name))
    return {
      ...u,
      tags: cu?.tags ?? u.tags ?? [],
      evidence: cu?.evidence?.slice(0, 3),
    }
  })

  const detachmentAdds: EnemyUnitWithEvidence[] = (detachment?.adds ?? []).map(
    (add) => {
      const cu =
        catalogUnitMap.get(add.name) ||
        catalogUnitMap.get(normalizeName(add.name))
      return {
        ...add,
        tags: cu?.tags ?? add.tags ?? [],
        evidence: cu?.evidence?.slice(0, 3),
      }
    },
  )

  const units: EnemyUnitWithEvidence[] = [...coreUnits, ...detachmentAdds]

  const toggleUnit = (name: string) => {
    setSelectedUnits((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    )
  }

  const handleStart = () => {
    const tagSet = new Set<EnemyTag>()

    if (detachment) {
      detachment.defaultTraits.forEach((trait) =>
        trait.tags.forEach((tag) => tagSet.add(tag)),
      )
    }

    units.forEach((u) => {
      if (selectedUnits.includes(u.name)) {
        ;(u.tags ?? []).forEach((tag) => tagSet.add(tag))
      }
    })

    onStart(Array.from(tagSet))
  }

  return (
    <div className="space-y-4 p-4 bg-gray-800 text-white rounded-lg">
      <div>
        <label className="block mb-2 text-sm font-medium">Faction</label>
        <Select
          value={faction}
          onValueChange={(v) => {
            setFaction(v as EnemyFaction)
            setDetachmentIndex(null)
            setSelectedUnits([])
          }}
          className="w-full bg-gray-700 text-white"
        >
          <option value="">Select faction</option>
          {Object.keys(ENEMY_DETS).map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </Select>
      </div>

      {detachments.length > 0 && (
        <div>
          <label className="block mb-2 text-sm font-medium">Detachment</label>
          <Select
            value={
              detachmentIndex !== null ? detachmentIndex.toString() : ''
            }
            onValueChange={(v) => {
              setDetachmentIndex(v ? parseInt(v) : null)
              setSelectedUnits([])
            }}
            className="w-full bg-gray-700 text-white"
          >
            <option value="">None</option>
            {detachments.map((d, idx) => (
              <SelectItem key={d.name} value={idx.toString()}>
                {d.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      )}

      {units.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Key Units</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {units.map((u) => {
              const active = selectedUnits.includes(u.name)
              return (
                <Card
                  key={u.name}
                  className={cn(
                    'cursor-pointer bg-gray-700 border-gray-600 text-white',
                    active && 'border-blue-500 bg-blue-700/40',
                  )}
                  onClick={() => toggleUnit(u.name)}
                >
                  <CardHeader className="flex items-start justify-between">
                    <CardTitle>{u.name}</CardTitle>
                    {u.evidence && u.evidence.length > 0 && (
                      <div className="relative group">
                        <span
                          tabIndex={0}
                          className="inline-block w-4 h-4 text-center rounded-full bg-gray-600 text-white text-xs leading-4 cursor-help"
                        >
                          i
                        </span>
                        <div className="absolute z-10 hidden w-64 p-2 text-xs text-white bg-gray-900 rounded shadow-lg right-0 top-5 group-hover:block group-focus-within:block">
                          <ul className="list-disc pl-4 space-y-1">
                            {u.evidence.map((e) => (
                              <li key={e}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{u.threat}</p>
                    <div className="flex flex-wrap gap-1">
                      {u.tags.map((t) => (
                        <Badge
                          key={t}
                          className="bg-gray-600 border-gray-500 text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      <Button
        onClick={handleStart}
        disabled={!faction}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        Start
      </Button>
    </div>
  )
}

export default EnemySelector

