import React, { FormEventHandler } from 'react'

type TitleProps = {
  setTitle: any
}

const Title = ({ setTitle }: TitleProps) => {
  const handleFontChange: FormEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value
    setTitle(`${value}`)
  }
  return (
    <div className='heading'>
      <input placeholder='Type your title here!' onChange={handleFontChange} />
    </div>
  )
}

export default Title
