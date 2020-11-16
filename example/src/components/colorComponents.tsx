import React, { FormEventHandler } from 'react'

type colorComponents = {
  measureUnit: string
  name: string
  setTheme: any
  colorName: string
}

const ColorComponent = ({ name, colorName }: colorComponents) => {
  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    console.log(event.currentTarget.name)
    console.log(event.currentTarget.value)
  }

  return (
    <div className='colors'>
      <p>{colorName}</p>
      <input type='color' name={name} onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ColorComponent
