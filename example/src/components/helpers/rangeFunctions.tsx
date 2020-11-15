

type rangeFunctionProps = {
  value: string,
  setTheme: any,
  measureUnit?: string,
}

function fontWeight({value, setTheme}: rangeFunctionProps) {
  const fontWeight = value
  setTheme({fontWeight})
}

function width({value, setTheme, measureUnit}: rangeFunctionProps) {
  const width = value+measureUnit
  setTheme({width})
}

function formPadding({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const formPadding = value+measureUnit
  setTheme({formPadding})
}

function formBorderRadius({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const formBorderRadius = value+measureUnit
  setTheme({formBorderRadius})
}

function headingBorderRadius({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const headingBorderRadius = value+measureUnit
  setTheme({headingBorderRadius})
}

function inputBorderRadius({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const inputBorderRadius = value+measureUnit
  setTheme({inputBorderRadius})
}

function messageInputHeight({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const messageInputHeight = value+measureUnit
  setTheme({messageInputHeight})
}

function buttonPadding({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const buttonPadding = value+measureUnit
  setTheme({buttonPadding})
}

function buttonLetterSpacing({value, setTheme, measureUnit}: rangeFunctionProps)  {
  const buttonLetterSpacing = value+measureUnit
  setTheme({buttonLetterSpacing})
}



export default {
  fontWeight,
  width,
  formPadding,
  formBorderRadius,
  headingBorderRadius, 
  inputBorderRadius,
  messageInputHeight,
  buttonPadding,
  buttonLetterSpacing
}

