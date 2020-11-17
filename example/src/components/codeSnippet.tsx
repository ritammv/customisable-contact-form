import React, { useEffect } from 'react'
import Prism from 'prismjs'

type codeProps = {
  theme: Theme
  title: string
  buttonTitle: string
}

type Theme = {
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
  messageInputHeight?: string
  formBorderColor?: string
  formBorderWeight?: string
  headingBorderBottom?: string
  headingBorderColor?: string
  inputBorderWeight?: string
  inputBorderColor?: string
}

const CodeSnippet = ({ theme, title, buttonTitle }: codeProps) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const keys = Object.keys(theme)
  const string = keys
    .reduce((a, b) => {
      if (!theme[b]) return a
      else
        return (
          a +
          `${b}: "${theme[b]}",
    `
        )
    }, ``)
    .trim()

  const codeOutput = `
  <Form theme={
    ${string}
    }
  <Heading title='${title}'/>
  <FirstName/>
  <LastName/>
  <Email/>
  <Message/>
  <SubmitButton buttonTitle='${buttonTitle}' />
  />
  `
  return (
    <div className='code'>
      <pre>
        <code>{codeOutput}</code>
      </pre>
    </div>
  )
}

export default CodeSnippet
