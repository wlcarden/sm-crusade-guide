import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import PhasesTabs from './PhasesTabs'
import type {
  MissionRule,
  Primary,
  Deployment,
  MissionTag,
  EnemyTag,
} from '@/data/types'

interface MissionContext {
  rule: MissionRule
  primary: Primary
  deployment: Deployment
  tags: MissionTag[]
}

interface GameplayShellProps {
  mission: MissionContext
  enemy: EnemyTag[]
  onReset: () => void
}

export function GameplayShell({ mission, enemy, onReset }: GameplayShellProps) {
  const [turn, setTurn] = useState(1)
  const [ourCp, setOurCp] = useState(0)
  const [theirCp, setTheirCp] = useState(0)
  const [goesFirst, setGoesFirst] = useState('us')

  return (
    <div className="space-y-6">
      <Card className="bg-zinc-800 text-white rounded-xl border-zinc-700">
        <CardHeader>
          <CardTitle>Context</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-zinc-700 border-zinc-600">{mission.rule.name}</Badge>
            <Badge className="bg-zinc-700 border-zinc-600">{mission.primary.name}</Badge>
            <Badge className="bg-zinc-700 border-zinc-600">{mission.deployment.name}</Badge>
          </div>
          {enemy.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {enemy.map((tag) => (
                <Badge key={tag} className="bg-zinc-700 border-zinc-600">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-zinc-800 text-white rounded-xl border-zinc-700 p-4 space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Turn</span>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setTurn((t) => Math.max(1, t - 1))}
          >
            -
          </Button>
          <span className="w-8 text-center">{turn}</span>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setTurn((t) => Math.min(5, t + 1))}
          >
            +
          </Button>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="font-medium">Our CP</span>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setOurCp((c) => Math.max(0, c - 1))}
            >
              -
            </Button>
            <input
              type="number"
              value={ourCp}
              onChange={(e) =>
                setOurCp(Math.max(0, parseInt(e.target.value) || 0))
              }
              className="w-16 rounded bg-zinc-700 text-center"
            />
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setOurCp((c) => c + 1)}
            >
              +
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Their CP</span>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setTheirCp((c) => Math.max(0, c - 1))}
            >
              -
            </Button>
            <input
              type="number"
              value={theirCp}
              onChange={(e) =>
                setTheirCp(Math.max(0, parseInt(e.target.value) || 0))
              }
              className="w-16 rounded bg-zinc-700 text-center"
            />
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setTheirCp((c) => c + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">Who goes first</span>
          <Select
            value={goesFirst}
            onValueChange={setGoesFirst}
            className="bg-zinc-700 text-white"
          >
            <SelectItem value="us">Us</SelectItem>
            <SelectItem value="them">Them</SelectItem>
          </Select>
        </div>
      </Card>

      <PhasesTabs />

      <Button variant="outline" onClick={onReset}>
        Reset Match
      </Button>
    </div>
  )
}

export default GameplayShell
