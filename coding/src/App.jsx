import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import SignUp from './pages/SignUp'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path = "*" element = {<NoPage/>}/>
      <Route path="/signup" element = {<SignUp/>}/>
    </Routes>
  )
}

export default App
