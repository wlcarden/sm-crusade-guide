import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { MISSION_RULES, PRIMARY_MISSIONS, DEPLOYMENTS } from '@/data/missions'
import type { MissionTag, MissionRule, Primary, Deployment } from '@/data/types'

interface MissionContext {
  rule: MissionRule
  primary: Primary
  deployment: Deployment
  tags: MissionTag[]
}

interface MissionWizardProps {
  onNext: (mission: MissionContext) => void
}

export function MissionWizard({ onNext }: MissionWizardProps) {
  const [rule, setRule] = useState<MissionRule | undefined>()
  const [primary, setPrimary] = useState<Primary | undefined>()
  const [deployment, setDeployment] = useState<Deployment | undefined>()

  const draw = <T,>(items: T[], setter: (value: T) => void) => {
    const item = items[Math.floor(Math.random() * items.length)]
    setter(item)
  }

  const handleNext = () => {
    if (!rule || !primary || !deployment) return
    const tags: MissionTag[] = [
      ...rule.tags,
      ...primary.tags,
      ...deployment.tags,
    ]
    onNext({ rule, primary, deployment, tags })
  }

  const renderSection = <T extends { name: string; tip: string; tags: MissionTag[] }>(
    label: string,
    items: T[],
    value: T | undefined,
    onChange: (item: T | undefined) => void,
    onDraw: () => void,
  ) => (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Select
          value={value?.name ?? ''}
          onValueChange={(name) =>
            onChange(items.find((i) => i.name === name))
          }
          className="flex-1"
        >
          <option value="">Select {label}</option>
          {items.map((i) => (
            <SelectItem key={i.name} value={i.name}>
              {i.name}
            </SelectItem>
          ))}
        </Select>
        <Button onClick={onDraw} variant="secondary">
          Draw
        </Button>
      </div>
      {value && (
        <div className="text-sm">
          <p className="text-gray-600 dark:text-gray-300">{value.tip}</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {value.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Mission Setup</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderSection('Mission Rule', MISSION_RULES, rule, setRule, () => draw(MISSION_RULES, setRule))}
        {renderSection('Primary Mission', PRIMARY_MISSIONS, primary, setPrimary, () => draw(PRIMARY_MISSIONS, setPrimary))}
        {renderSection('Deployment', DEPLOYMENTS, deployment, setDeployment, () => draw(DEPLOYMENTS, setDeployment))}
        <div className="pt-2">
          <Button onClick={handleNext} disabled={!rule || !primary || !deployment} className="w-full">
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MissionWizard

