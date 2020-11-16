import React, { FormEventHandler } from 'react'
import helperFunctions from './helpers/rangeFunctions'

type RangeComponents = {
  min: number
  max: number
  rangeName: string
  measureUnit: string
  name: string
  setTheme: React.Dispatch<React.SetStateAction<{}>>
}

const RangeComponent = ({
  min,
  max,
  rangeName,
  name,
  setTheme,
  measureUnit
}: RangeComponents) => {
  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    helperFunctions[name]({ value, setTheme, measureUnit })
  }

  return (
    <div className='range'>
      <p>{rangeName}</p>
      <input
        type='range'
        min={min}
        max={max}
        name={name}
        onChange={(e) => handleChange(e)}
      />
      {/* <p> {`${value} ${measureUnit}`}</p> */}
    </div>
  )
}

export default RangeComponent
