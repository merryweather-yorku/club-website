import { useState } from 'react'
import './App.css'
import Navbar from './navbar.tsx'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      <Navbar setPage={setPage} />
      {page === 0 && <Landing />}
      {page === 1 && <AboutPage />}
      {page === 2 && <ProjectsPage />}
      {page === 3 && <JoinPage />}
    </>
  )
}

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Merryweather Technologies @ YorkU</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function AboutPage() {
  return (
  <>
    <h1>About Merryweather Technologies</h1>
  </>
  );
}

function ProjectsPage() {
  return (
  <>
    <h1>Projects @ Merryweather Technologies</h1>
  </>
  );
}

function JoinPage() {
  return (
  <>
    <h1>Join Merryweather Technologies</h1>
  </>
  );
}

export default App
