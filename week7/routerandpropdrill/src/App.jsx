import React, { Suspense } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
const Dashboard = React.lazy(()=>import ("./components/Dashboard.jsx"))
import Landing from "./components/Landing"
import Navbar from './components/Navbar.jsx'

function App() {


  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/dashboard" element = {<Suspense><Dashboard/></Suspense>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
