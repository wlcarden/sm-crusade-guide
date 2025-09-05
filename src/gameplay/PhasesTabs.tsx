import { useState } from 'react'
import { cn } from '@/lib'

const PHASES = ['Command', 'Movement', 'Shooting', 'Charge', 'Fight', 'End']

export function PhasesTabs() {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-2">
      <div className="flex">
        {PHASES.map((phase, idx) => (
          <button
            key={phase}
            onClick={() => setActive(idx)}
            className={cn(
              'px-3 py-2 text-sm capitalize rounded-t-md',
              idx === active
                ? 'bg-zinc-700 text-white'
                : 'bg-zinc-800 text-zinc-400',
            )}
          >
            {phase}
          </button>
        ))}
      </div>
      <div className="rounded-b-md bg-zinc-700 p-4 text-white">
        <p>{PHASES[active]} phase coming soon.</p>
      </div>
    </div>
  )
}

export default PhasesTabs
