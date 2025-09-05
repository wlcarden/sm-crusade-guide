import type { SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn('border rounded px-3 py-2 bg-white dark:bg-gray-800', className)}
      {...props}
    />
  )
}
