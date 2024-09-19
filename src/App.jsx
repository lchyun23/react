import '@/App.css'
import { produce } from 'immer'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function Input({ value, onChange }) {
  console.log('- 자식 Input 컴포넌트 rerendered (이슈 : 2번 리렌더되는걸 확인할 수 있다.)')

  return (
    <input
      value={value}
      onChange={(event) => {
        const value = event.target.value
        onChange(value)
      }}
    />
  )
}

function App() {
  const [outerValue, setOuterValue] = useState('')

  console.log('- 부모 App 페이지 rerendered')

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input value={outerValue} onChange={(value) => setOuterValue(value)} />
      <input value={outerValue} onChange={(event) => setOuterValue(event.target.value)} />
    </div>
  )
}

export default App
