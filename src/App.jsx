// context 사용법

import '@/App.css'
import { produce } from 'immer'
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from 'react'

// Count 안에서 count를 넘기려면? - useState
// useContext를 통해 CreatedContext 값 넘기기.
function Count() {
  const count = useContext(CreatedContext)
  return <div>{count}</div>
}

const CreatedContext = createContext(0 /* Default Value-private context, DV */) // 0값을 제공한다. 숫자를 제공하는 context

function App() {
  const [count, setCount] = useState(0)

  return (
    // provider 설정 완료. initial value.
    <CreatedContext.Provider value={count}>
      <Count />
      {/* consumer */}
      <button onClick={(e) => setCount((previous) => previous + 1)}>증가</button>
    </CreatedContext.Provider>
  )
}

export default App
