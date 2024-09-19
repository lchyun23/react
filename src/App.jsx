import '@/App.css'
import { produce } from 'immer'
import { createContext, useContext, useState } from 'react'

function LastComponent() {
  return <div className='component-box'>Last Component</div>
}

function ThirdComponent({ count }) {
  return (
    <div className='component-box'>
      Third Component
      <div>{count}</div>
      <LastComponent />
    </div>
  )
}

function SecondComponent({ count }) {
  return (
    <div className='component-box'>
      Second Component
      <ThirdComponent count={count} />
    </div>
  )
}

function FirstComponent({ count }) {
  return (
    <div className='component-box'>
      First Component
      <SecondComponent count={count} />
    </div>
  )
}

function ButtonComponent({ onClick }) {
  return (
    <div className='component-box'>
      Button Component
      <button onClick={onClick}>증가</button>
    </div>
  )
}

function NonContextComponent({ count }) {
  return (
    <div className='component-box'>
      Non-Context Component<div>{count}</div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className='section-box'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: 10,
      }}
    >
      <FirstComponent count={count} />
      <ButtonComponent onClick={(e) => setCount((previous) => previous + 1)} />
      <NonContextComponent count={count} />
    </div>
  )
}

export default App
