import '@/App.css'
// immer import 해야 한다.
import { produce } from 'immer'
import { useEffect, useRef, useState } from 'react'

function UsernameInput({ reference }) {
  return (
    <div>
      Username : <input ref={reference} />
    </div>
  )
}

function PasswordInput({ reference }) {
  const [valid, setValid] = useState({
    maximum: false,
    minimum: false,
    required: false,
  })

  function changeMode(e) {
    const input = reference.current
    const button = e.currentTarget

    if (input.type === 'password') {
      input.type = 'text'
      button.innerText = '감추기'
    } else if (input.type === 'text') {
      input.type = 'password'
      button.innerText = '보이기'
    }
  }

  // 유효성 검사하는 함수를 만든다.
  function validate(e) {
    const value = e.currentTarget.value
    setValid(
      produce(valid, (draft) => {
        draft.maximum = value.length <= 10
        draft.minimum = value.length > 5
        draft.required = value.length > 0
      }),
    )
  }

  console.log('- rerendered')
  return (
    <div>
      {/* input의 유효성 검사 안에서 message 쓰기  */}
      Password :{' '}
      <input
        ref={reference}
        type='password'
        // 입력할 때마다 validation 해야 한다.
        onChange={(e) => validate(e)}
      />
      <button onClick={changeMode}>보이기</button>
      {!valid.maximum && <div style={{ color: 'red' }}>비밀번호는 10글자 넘으면 안 됨</div>}
      {!valid.minimum && <div style={{ color: 'red' }}>비밀번호는 최소 5글자 넘어야함</div>}
      {!valid.required && <div style={{ color: 'red' }}>비밀번호는 필수값임</div>}
    </div>
  )
}

function App() {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  function registration() {
    // 회원가입 완료 버튼을 눌렀을 때 username, password 값을 콘솔로그로 찍는다.
    // reference lifting 을 해야 한다. 부모가 값을 알아야한다.
    console.log({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
  }

  return (
    <section>
      <UsernameInput reference={usernameRef} />
      <PasswordInput reference={passwordRef} />
      <button>회원가입 완료</button>
    </section>
  )
}

export default App
