import '@/App.css'
import { useEffect, useRef } from 'react'

function Header({ title }) {
  return (
    <div style={{ position: 'sticky', top: 0, height: 60, backgroundColor: 'white' }}>
      <div id='header-title'>{title}</div>
    </div>
  )
}

function Title({ title }) {
  const titleReference = useRef(null)

  useEffect(() => {
    console.log(titleReference.current)
    console.log(titleReference.current?.innerText)
    // 1. Define 정의
    const observer = new window.IntersectionObserver(([entry]) => {
      if (!entry.intersectionRatio) {
        document.getElementById('header-title').classList.add('show-header-title')
      } else {
        document.getElementById('header-title').classList.remove('show-header-title')
      }
    })
    // 2. Attach 부착
    observer.observe(titleReference.current)
    // 3. Detach 삭제
    return () => {
      observer.disconnect()
    }
  }, [])

  return <h3 ref={titleReference}>{title}</h3>
}

function Post({ post }) {
  return <div>{post}</div>
}

function Content({ title, post }) {
  return (
    <div>
      <Title title={title} />
      <Post post={post} />
    </div>
  )
}

function App() {
  const example = {
    title: 'Lorem ipsum',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  }
  return (
    <>
      <Header title={example.title} />
      <Content title={example.title} post={example.value} />
    </>
  )
}

export default App
