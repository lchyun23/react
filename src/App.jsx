import '@/App.css'
import { produce } from 'immer'
import { createContext, useContext, useState } from 'react'

function LastComponent() {
  console.log('- A.4. Last Component')
  return <div className='component-box'>Last Component</div>
}

function ThirdComponent() {
  const { count } = useContext(CreatedContext)
  console.log('- A.3. Third Component')
  return (
    <div className='component-box'>
      Third Component
      <div>{count}</div>
      <LastComponent />
    </div>
  )
}

function SecondComponent() {
  console.log('- A.2. Second Component')
  return (
    <div className='component-box'>
      Second Component
      <ThirdComponent />
    </div>
  )
}

function FirstComponent() {
  console.log('- A.1. First Component')
  return (
    <div className='component-box'>
      First Component
      <SecondComponent />
    </div>
  )
}

function ButtonComponent() {
  const { setCount } = useContext(CreatedContext)
  console.log('- B. Button Component')
  return (
    <div className='component-box'>
      Button Component
      <button onClick={(e) => setCount((previous) => previous + 1)}>증가</button>
    </div>
  )
}

function NonContextComponent() {
  const { count } = useContext(CreatedContext)
  console.log('- C. Non-Context Component')
  return (
    <div className='component-box'>
      Non-Context Component<div>{count}</div>
    </div>
  )
}

const CreatedContext = createContext({ count: -10, setCount: (e) => {} } /* Default Value, DV */)

function CreatedContextProvider({ children }) {
  const [count, setCount] = useState(0)

  return <CreatedContext.Provider value={{ count, setCount }}>{children}</CreatedContext.Provider>
}

function App() {
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
      <CreatedContextProvider>
        <FirstComponent />
        <ButtonComponent />
      </CreatedContextProvider>
      <NonContextComponent />
    </div>
  )
}

export default App
