// REGLAS PARA CREAR UN HOOK DE REACT
// 1. Custom Hook es una funcion que utiliza otros hooks de React
// 2. El nombre de la funcion debe comenzar con la palabra use
// 3. Siempre deben ser funciones
// 4. Deben ser reutilizables, no para casos muy especificos
// 5. Deben retornar algo, ya sea un valor, un objeto, un array, una funcion, etc

import { useState } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Funcion que se ejecutara cuando se envie el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  // Funcion que se ejecuta cuando se escriba en los inputs
  // (event) => setEmail (event.target.value)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
