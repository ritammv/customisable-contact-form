import React, { FormEventHandler } from 'react'

type TitleProps = {
  title: string
  setTitle: any
}

const Title = ({ title, setTitle }: TitleProps) => {
  const handleFontChange: FormEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value
    setTitle(`${value}`)
  }
  return (
    <div className='heading'>
      <input
        value={title}
        placeholder='Type your title here!'
        onChange={handleFontChange}
      />
    </div>
  )
}

export default Title
