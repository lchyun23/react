// import { useRef, useState } from 'react'
// import '@/App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   const countReference = useRef(null)
//   const [valid, setValid] = useState(false)

//   console.log('- rerendered')
//   return (
//     <>
//       <div>{countReference.current?.value}</div>
//       <input
//         type='number'
//         ref={countReference}
//         // value={count}
//         onChange={(e) => {
//           const input = Number(e.currentTarget.value)
//           // setCount(input)
//           setValid(input >= 19)
//         }}
//       />
//       {valid ? <div>성년입니다</div> : <div style={{ color: 'red' }}>미성년입니다</div>}
//     </>
//   )
// }

// export default App
