import * as React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'
import { StyledForm } from './styles'

export interface Theme {
  primaryColor?: string
  primaryFont?: string
  inputBorderRadius?: string
  inputBorder?: string
  inputBackgroundColor?: string
  width?: string
  fontWeight?: string
  buttonFontColor?: string
  headingColor?: string
  headingSize?: string
  backgroundColor?: string
  buttonBackgroundColor?: string
  formPadding?: string
  formBorderRadius?: string
  headingBackgroundColor?: string
  headingBorderRadius?: string
  buttonPadding?: string
  buttonLetterSpacing?: string
  headingBorderBottom?: string
  messageInputHeight?: string
}

export interface formProps {
  children?: JSX.Element[] | JSX.Element
  theme: Theme
}

const defaultTheme = {
  primaryColor: 'black',
  primaryFont: 'sans-serif',
  buttonLetterSpacing: '30px',
  buttonPadding: '20px',
  buttonBackgroundColor: 'black',
  buttonFontColor: 'white',
  headingBackgroundColor: 'white',
  headingBorderRadius: '',
  headingSize: '30px',
  headingColor: 'black',
  inputBackgroundColor: 'white',
  inputBorderRadius: '15px',
  inputBorderWeight: '2px',
  inputBorderColor: 'grey',
  formPadding: '30px',
  formBorderRadius: '35px',
  formBorderWeight: '1px',
  formBorderColor: 'grey',
  backgroundColor: 'white',
  title: 'bonjour',
  fontWeight: '200',
  width: '325px',
  headingBorderBottom: '2px',
  headingBorderColor: 'black',
  messageInputHeight: '70px'
}

function Form({ children, theme }: formProps) {
  const methods = useForm()
  const onSubmit = (data: Object) => console.log(data)

  Object.assign(defaultTheme, theme)

  return (
    <ThemeProvider theme={defaultTheme}>
      <FormProvider {...methods}>
        <StyledForm className='App' onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </StyledForm>
      </FormProvider>
    </ThemeProvider>
  )
}

export default Form
