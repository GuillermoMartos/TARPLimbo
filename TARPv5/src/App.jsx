import { useState } from 'react'
import './App.css'
import Header from './Header/header'
import Login from './Login/login'
import Signup from './Signup/signup'
import simio from './simio.png'

function App() {

  var [search, set_search] = useState("")

  function handleChange(e) {
    e.preventDefault()
    set_search(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="main-container">
      <Header />
      <img src={simio} alt="simio logo" className="simio-img" />

      <div className='phrase'>

        <p>Powered by TARP TOKEN</p>
        <h1>The AI Powered Tool That Measures <br /> The Security of Your Crypto Portfolio</h1>
        <h5>Automatically know the red flags on any token!</h5>
      </div>


      <div className="container-landing-search">

        <input
          className='landing-search'
          placeholder="Search project by name or contract address"
          required
          name="search"
          value={search}
          onChange={(e) => handleChange(e)}
        />

        <select name="selector" id="selector" className="landing-select">
            <option disabled selected>Network{"  "}</option>
            <option>AAA</option>
            <option>BBB</option>
            <option>CCC</option>

        </select>
        <button className='btn-select'>Read →</button>

        
      </div>
    </div>
  )
}

export default App
