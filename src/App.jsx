import '@/App.css'
import { produce } from 'immer'
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'

/** reducer : action에 따라 상태 전이를 미리 정해놓는 것이다. 자율성 보장 안 됨.
 *
 * @param {*} previous = (이전) 상태
 * @param {*} action =         상태변이 요청 (어떻게 변경할지)
 * @returns
 */

function reducer(previous, action /* {type(수행 타입), payload(유저 파라미터) }*/) {
  switch (action.type) {
    case 'INCREASE':
      return previous + action.payload
      break
    case 'DECREASE':
      return previous - action.payload
    default:
      throw new Error('존재하지 않는 action.type입니다.')
  }
}
// setState(previous, action) => {
//   return previous + 1
// }

function App() {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>{count}</div>
      {/* <button onClick={() => setCount(count + 10)}>증가</button> */}
      <button onClick={() => dispatch({ type: 'INCREASE', payload: 5 })}>증가</button>
      {/* <button onClick={() => setCount(count - 10)}>감소</button> */}
      <button onClick={() => dispatch({ type: 'DECREASE', payload: 8 })}>감소</button>
      {/* 책임분리 느낌이네용. reducer에게 다 넘겨버리기. - redux 때문에 짚고 넘어가는 중. */}
    </>
  )
}

export default App
