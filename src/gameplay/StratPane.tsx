import { useMemo, useState } from 'react'
import { Select, SelectItem } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { getStrats } from '@/data/stratagems'

interface StratPaneProps {
  detachment?: string
}

export default function StratPane({ detachment }: StratPaneProps) {
  const [phase, setPhase] = useState('all')
  const [window, setWindow] = useState('all')

  const strats = useMemo(() => {
    return getStrats(detachment).filter((s) => {
      const phaseMatch = phase === 'all' || s.phase === phase
      const windowMatch = window === 'all' || s.window === window
      return phaseMatch && windowMatch
    })
  }, [detachment, phase, window])

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Select value={phase} onValueChange={setPhase} className="w-40">
          <SelectItem value="all">All Phases</SelectItem>
          <SelectItem value="command">Command</SelectItem>
          <SelectItem value="movement">Movement</SelectItem>
          <SelectItem value="shooting">Shooting</SelectItem>
          <SelectItem value="charge">Charge</SelectItem>
          <SelectItem value="fight">Fight</SelectItem>
          <SelectItem value="end">End</SelectItem>
          <SelectItem value="any">Any</SelectItem>
        </Select>
        <Select value={window} onValueChange={setWindow} className="w-32">
          <SelectItem value="all">Any Turn</SelectItem>
          <SelectItem value="my">Yours</SelectItem>
          <SelectItem value="opp">Opponent</SelectItem>
          <SelectItem value="both">Either</SelectItem>
        </Select>
      </div>
      <ul className="space-y-2">
        {strats.map((s) => (
          <li key={s.name} className="rounded border p-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold">{s.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{s.blurb}</p>
              </div>
              <Badge className="shrink-0 bg-gray-200 dark:bg-gray-700">
                {s.cp} CP
              </Badge>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
