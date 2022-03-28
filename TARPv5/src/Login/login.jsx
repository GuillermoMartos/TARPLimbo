import { useState } from 'react'
import '../Signup/signup.css'

function Login() {

  const [data, set_data] = useState({
    email: "",
    password: "",
  })
  const [errors, set_errors] = useState({
    password: "",
    email: ""
  })


  //sección logica ingreso de datos para login
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
      password: "",
      email: ""
    }
    )
  }

  function handleClose() {
  }

  return (

    <div className="signup-container">
      <p className="close-sign" onClick={handleClose()}>X</p>

      <h1>Log in to your account.</h1>

      <form className='signup-form' onSubmit={handleSubmit}>



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
          Log in →
        </button>
      </form>
    </div>
  )
}

export default Login