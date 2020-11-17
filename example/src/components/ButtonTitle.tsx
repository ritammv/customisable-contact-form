import React, { FormEventHandler } from 'react'

type ButtonTitleProps = {
  setButtonTitle: React.Dispatch<React.SetStateAction<string>>
}

const ButtonTitle = ({ setButtonTitle }: ButtonTitleProps) => {
  const handleTitleChange: FormEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value
    setButtonTitle(`${value}`)
  }
  return (
    <div className='heading'>
      <input
        placeholder='Type your Button Title here!'
        onChange={handleTitleChange}
        type='text'
      />
    </div>
  )
}

export default ButtonTitle
