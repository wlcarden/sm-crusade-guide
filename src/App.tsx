import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="p-8">
      <Card className="p-6 space-y-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold">
          Vite + React <Badge className="ml-2">Tailwind</Badge>
        </h1>
        <Button onClick={() => setCount((c) => c + 1)}>Count is {count}</Button>
        <Select defaultValue="light" className="mt-2">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Select>
      </Card>
    </main>
  )
}

export default App
