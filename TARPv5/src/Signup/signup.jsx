import { useState } from 'react'
import './signup.css'

function Signup() {
  const data = useState({
    name: "",
    email: "",
    password: "",
  })
  const errors = useState({
    name: "",
    password: "",
    email: ""
  })


  //sección logica ingreso de datos para signup
  function handleChange(e) {
    e.preventDefault()
    const value = e.target.value;
    set_data({
      ...data,
      [e.target.name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    set_data({
      name: "",
      password: "",
      email: ""
    })
  }

  function handleClose() {
    // alert("hola")
    document.getElementById("hiddensign").style.position="absolute"
    document.getElementById("hiddensign").style.visibility="hidden"
  }

  return (

    <div id="hiddensign" className="signup-container">
      <p className="close-sign" onClick={()=>handleClose()}>X</p>

      <h1>Create an account.</h1>

      <form className='signup-form' onSubmit={handleSubmit}>
        <p className='text-sign'>

          {"the AI Powered Tool That Measures The Security of Your Crypto PortfolioThe AI Powered Tool That Measures The Security of Your Crypto PortfolioThe AI Powered Tool That Measures The Security of Your Crypto PortfolioThe AI Powered Tool That Measures The Security of Your Crypto Portfolio.".toLowerCase()}
        </p>
        <div className="input-form">
          <label for="password"> Full name</label>
          <input
            className='input-signup'
            type="text"
            placeholder="John Chris Doe"
            required
            name="name"
            value={data.name}
          />
          {errors.name && (
            <div >
              <strong>{errors.name}</strong>
            </div>
          )}
        </div>

        <div className="input-form">
          <label for="email"> Email adress</label>
          <input
            className='input-signup'
            type="email"
            placeholder="example@email.com"
            required
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
          />
          {errors.email && (
            <div >
              <strong>{errors.email}</strong>
            </div>
          )}
        </div>

        <div className="input-form">
          <label for="password"> Password</label>
          <input
            className='input-signup'
            type="password"
            placeholder="●●●●●●●●●●●●●"
            required
            name="password"
            value={data.password}
            onChange={(e) => handleChange(e)}
          />
          <label for="password"> at least 10 characters with a capital letter and a number</label>
          {errors.password && (
            <div>
              <strong>{errors.password}</strong>
            </div>
          )}
        </div>

        <button
          className='btn-signup'
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Sign up →
        </button>
      </form>
    </div>
  )
}

export default Signup