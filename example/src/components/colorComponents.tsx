import React, { FormEventHandler } from 'react'
import colorFunctions from './helpers/colorfunctions'

type colorComponents = {
  name: string
  setTheme: any
  colorName: string
}

const ColorComponent = ({ name, colorName, setTheme }: colorComponents) => {
  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    colorFunctions[name]({ value, setTheme })
  }

  return (
    <div className='colors'>
      <p>{colorName}</p>
      <input type='color' name={name} onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ColorComponent
