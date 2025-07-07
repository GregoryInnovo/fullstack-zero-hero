import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Vite + React</CardTitle>
          <CardDescription>
            A modern web development stack
          </CardDescription>
          <CardAction>
            <button onClick={() => setCount((count) => count + 1)}>
              Count: {count}
            </button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center w-full justify-center gap-8">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="w-24 h-24" alt="React logo" />
            </a>
          </div>
          <p className="text-center mt-4">
            Edit <code className="font-mono bg-muted px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </CardContent>
        <CardFooter className="justify-center text-muted-foreground">
          Click on the Vite and React logos to learn more
        </CardFooter>
      </Card>
    </>
  )
}

export default App
