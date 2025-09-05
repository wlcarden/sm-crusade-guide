import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import MissionWizard from '@/pregame/MissionWizard'
import EnemySelector from '@/pregame/EnemySelector'
import type { MissionTag, EnemyTag } from '@/data/types'

function App() {
  const [step, setStep] = useState(0)
  const [missionTags, setMissionTags] = useState<MissionTag[]>([])
  const [enemyTags, setEnemyTags] = useState<EnemyTag[]>([])

  const handleMissionNext = (tags: MissionTag[]) => {
    setMissionTags(tags)
    setStep(1)
  }

  const handleEnemyStart = (tags: EnemyTag[]) => {
    setEnemyTags(tags)
    setStep(2)
  }

  const Stepper = () => (
    <div className="mb-4 flex items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
            step >= 0 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-500'
          }`}
        >
          1
        </div>
        <span className={step >= 0 ? 'font-medium text-blue-600' : 'text-gray-500'}>
          Mission
        </span>
      </div>
      <div className={`h-px w-8 ${step > 0 ? 'bg-blue-600' : 'bg-gray-300'}`} />
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
            step >= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-500'
          }`}
        >
          2
        </div>
        <span className={step >= 1 ? 'font-medium text-blue-600' : 'text-gray-500'}>
          Enemy
        </span>
      </div>
    </div>
  )

  return (
    <main className="p-8">
      {step < 2 ? (
        <Card className="mx-auto max-w-xl space-y-4 p-6">
          <Stepper />
          {step === 0 ? (
            <MissionWizard onNext={handleMissionNext} />
          ) : (
            <EnemySelector onStart={handleEnemyStart} />
          )}
        </Card>
      ) : (
        <Card className="mx-auto max-w-md space-y-4 p-6 text-center">
          <h2 className="text-2xl font-bold">Setup Complete</h2>
          <p className="text-gray-600 dark:text-gray-300">Gameplay shell coming soon.</p>
          <div className="flex flex-wrap justify-center gap-1">
            {missionTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            {enemyTags.map((tag) => (
              <Badge key={tag} className="bg-gray-700 text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      )}
    </main>
  )
}

export default App

