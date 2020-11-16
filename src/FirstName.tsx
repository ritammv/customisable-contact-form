import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput, StyledLabel } from './styles'

type Inputs = {
  firstName: string
}

function FirstName() {
  const { register, errors } = useFormContext<Inputs>()

  return (
    <div className='first_name_wrapper'>
      <StyledLabel>First Name</StyledLabel>
      <StyledInput
        type='text'
        name='firstName'
        ref={register({ required: true })}
      />
      {errors.firstName && <p>This field is required</p>}
    </div>
  )
}

export default FirstName
