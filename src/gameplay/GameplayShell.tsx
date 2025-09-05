import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import StratPane from './StratPane'

const PHASES = ['Command', 'Movement', 'Shooting', 'Charge', 'Fight', 'End']

export default function GameplayShell() {
  const [phase, setPhase] = useState('Command')
  const [detachment, setDetachment] = useState('Gladius')

  return (
    <Card className="space-y-4 p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Detachment</span>
        <Select
          value={detachment}
          onValueChange={setDetachment}
          className="w-40"
        >
          <SelectItem value="Gladius">Gladius</SelectItem>
        </Select>
      </div>
      <div className="flex flex-wrap gap-2">
        {PHASES.map((p) => (
          <Button
            key={p}
            variant={phase === p ? 'default' : 'outline'}
            onClick={() => setPhase(p)}
            className="flex-1"
          >
            {p}
          </Button>
        ))}
      </div>
      <StratPane detachment={detachment} />
    </Card>
  )
}
