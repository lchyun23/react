// 렌더 절차를 상세하게 본다.
// 상태 -> 렌더 (JSX -> JSON)

import '@/App.css'
import { produce } from 'immer'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function App() {
  const [value, setValue] = useState(0) // 상태가 바뀌었다.

  useLayoutEffect(() => {
    console.log('2. Layout 직후 : useLayoutEffect')
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  useEffect(() => {
    console.log('3. Paint 직후 : useEffect')
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  console.log('1. Render : JSX -> JSON -> Virtual DOM -> Reconciliation-> Commit(DOM Mutation')
  return <button onClick={() => setValue(0)}>value: {value}</button>
}

export default App
