import './App.css'
import Header from './Header/header'
import Signup from './Signup/signup'
import simio from './simio.png'

function App() {


  return (
    <div className="main-container">
      <Header/>
      <Signup></Signup>

      <img src={simio} alt="simio logo" className="simio-img" />
    </div>
  )
}

export default App
