import { useState, lazy, Suspense, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { CountContext } from './context';
// import { Dashboard } from './components/Dashboard'
// const Landing  =  lazy(() => import('./components/Landing'));
// import './App.css'
// const Dashboard = lazy(() => (import("./components/Dashboard.jsx")));

// function App() {
//   

//   return (
//     <div>
//       {/* <BrowserRouter> */}
//       {/*   <AppBar /> */}
//       {/*   <Routes> */}
//       {/*     <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}/> */}
//       {/*     <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/> */}
//       {/*   </Routes> */}
//       {/* </BrowserRouter> */}
//     </div>
//   )
// }

// function AppBar() {

//   const navigate = useNavigate();
//   
//   return <div style={{background:"gray", color: 'white', margin: "2px", padding: "4px"}}>
//     <button onClick={() => {
//           // window.location.href= "/"
//           navigate("/")
//     }} type="">Landing Page</button>
//     
//     <button onClick={() => {
//           // window.location.href= "/dashboard"
//           navigate("/dashboard")
//     }} type="">Dashboard Page</button>
//   </div>
// }




////////// prop drilling ////////////////////
//
//
function App() {
  const [count, setCount] = useState(0);
  

// wrap everyone that wants to use the telepoted value inside a provider 
  return (
    <div>
      <CountContext.Provider value={count}>
        {/* <Count count={count} setCount={setCount} /> */}
        <Count setCount={setCount} />
      </ CountContext.Provider >
    
    </div>
  )
}

// function Count({count, setCount}) {
//   return <div>
//     <CountRenderer count={count} />
//     <Buttons count={count} setCount={setCount} />
//   </div>
// }

function Count({setCount}) {
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}
export default App
