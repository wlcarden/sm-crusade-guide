import { cn } from '@/lib'

const PHASES = [
  'command',
  'movement',
  'shooting',
  'charge',
  'fight',
  'end',
] as const

type Phase = (typeof PHASES)[number]

export type PhasesTabsProps = {
  active: Phase
  onChange: (p: Phase) => void
}

export function PhasesTabs({ active, onChange }: PhasesTabsProps) {
  return (
    <div className="space-y-2">
      <div className="flex">
        {PHASES.map((phase) => (
          <button
            key={phase}
            onClick={() => onChange(phase)}
            className={cn(
              'px-3 py-2 text-sm capitalize rounded-t-md',
              phase === active
                ? 'bg-zinc-700 text-white'
                : 'bg-zinc-800 text-zinc-400',
            )}
          >
            {phase}
          </button>
        ))}
      </div>
      <div className="rounded-b-md bg-zinc-700 p-4 text-white">
        <p>{active} phase coming soon.</p>
      </div>
    </div>
  )
}

export default PhasesTabs
