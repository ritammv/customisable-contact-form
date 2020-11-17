import * as React from 'react'
import { StyledButton } from './styles'
import './styles.css'

interface submitButtonProps {
  buttonTitle: string
}

function SubmitButton({ buttonTitle }: submitButtonProps) {
  return (
    <div className='buttonTitle_wrapper'>
      <StyledButton type='submit'>{buttonTitle || 'Submit'}</StyledButton>
    </div>
  )
}

export default SubmitButton
