import type { HTMLAttributes } from 'react'
import { cn } from '@/lib'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm',
        className,
      )}
      {...props}
    />
  )
}
