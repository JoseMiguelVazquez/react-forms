import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 2: crear los estados para guardar los valores del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso 4: Crear la funcion que se ejecutara cuando se envie el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedData = JSON.stringify({
      email,
      password
    })
    console.log(submittedData)
  }

  // Paso 1: Crear el formulario base
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}
export default SimpleForm
