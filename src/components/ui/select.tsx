import type {
  HTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from 'react'
import { cn } from '@/lib'

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  value?: string
  onValueChange?: (value: string) => void
}

export function Select({
  value,
  onValueChange,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={cn('border rounded px-3 py-2 bg-white dark:bg-gray-800', className)}
      {...props}
    >
      {children}
    </select>
  )
}

export function SelectTrigger({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('w-full', className)} {...props} />
}

export function SelectValue({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={className} {...props} />
}

export function SelectContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />
}

export function SelectItem({ className, ...props }: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option className={cn(className)} {...props} />
}
