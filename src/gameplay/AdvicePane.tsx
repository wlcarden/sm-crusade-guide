import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import type { AdviceCard } from '@/data/advice/types'
import type { AdviceContext } from '@/lib/advice'
import { selectAdvice } from '@/lib/advice'

type AdvicePaneProps = {
  ctx: AdviceContext
  cards?: AdviceCard[]
  title?: string
}

export default function AdvicePane({ ctx, cards = [], title = 'Advice' }: AdvicePaneProps) {
  const top = React.useMemo(() => selectAdvice(cards, ctx, 6), [cards, ctx])

  return (
    <Card className="bg-zinc-800 text-white rounded-xl border-zinc-700">
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {top.length === 0 ? (
          <div className="text-sm text-zinc-400">No advice yet for this phase/context.</div>
        ) : (
          <ul className="space-y-2">
            {top.map(a => (
              <li key={a.id} className="rounded-lg border border-zinc-700/70 bg-zinc-900/50 p-3">
                <div className="text-sm font-medium">{a.title}</div>
                <div className="text-xs text-zinc-300 mt-1">{a.body}</div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
