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

      <div className="stats">
        <div className="box-stats">

          <div className="titlestats">

            <span className='more-stats'>●●●</span>
            <h3>Contracts Analyzed</h3>
          </div>
          <h1>1.23k</h1>
          <p>More than 200 this week</p>
        </div>
        <div className="box-stats">
          <div className="titlestats">
            <span className='more-stats'>●●●</span>
            <h3>Scams detected</h3>
          </div>
          <h1>431</h1>
          <p>7 scams detected this week</p>
        </div>
      </div>


      <div className='phrase'>

        <p>      Creating an account grants you the benefit of tracking your crypto portfolio and give you the possibility to receive notifications when a token you’re invested in, changes certain code inside the contract or when the liquidity lock is expired.</p>

      </div>



    </div>
  )
}

export default App
