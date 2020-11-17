import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput, StyledLabel } from './styles'

type Inputs = {
  lastName: string
}

function LastName() {
  const { register, errors } = useFormContext<Inputs>()

  return (
    <div className='last_name_wrapper'>
      <StyledLabel>Last Name</StyledLabel>
      <StyledInput name='lastName' ref={register({ required: true })} />
      {errors.lastName && <p>This field is required</p>}
    </div>
  )
}

export default LastName
