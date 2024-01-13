import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
const Landing  =  lazy(() => import('./components/Landing'));
// import './App.css'
const Dashboard = lazy(() => (import("./components/Dashboard.jsx")));

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}/>
          <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {

  const navigate = useNavigate();
  
  return <div style={{background:"gray", color: 'white', margin: "2px", padding: "4px"}}>
    <button onClick={() => {
          // window.location.href= "/"
          navigate("/")
    }} type="">Landing Page</button>
    
    <button onClick={() => {
          // window.location.href= "/dashboard"
          navigate("/dashboard")
    }} type="">Dashboard Page</button>
  </div>
}

export default App
