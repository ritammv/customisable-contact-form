type colorFunctionProps = {
  value: string
  setTheme: any
}

function primaryColor({ value, setTheme }: colorFunctionProps) {
  const primaryColor = value
  setTheme({ primaryColor })
}

function backgroundColor({ value, setTheme }: colorFunctionProps) {
  const backgroundColor = value
  setTheme({ backgroundColor })
}

function headingBackgroundColor({ value, setTheme }: colorFunctionProps) {
  const headingBackgroundColor = value
  setTheme({ headingBackgroundColor })
}

function inputBackgroundColor({ value, setTheme }: colorFunctionProps) {
  const inputBackgroundColor = value
  setTheme({ inputBackgroundColor })
}

function buttonFontColor({ value, setTheme }: colorFunctionProps) {
  const buttonFontColor = value
  setTheme({ buttonFontColor })
}

function buttonBackgroundColor({ value, setTheme }: colorFunctionProps) {
  const buttonBackgroundColor = value
  setTheme({ buttonBackgroundColor })
}
export default {
  primaryColor,
  backgroundColor,
  headingBackgroundColor,
  inputBackgroundColor,
  buttonFontColor,
  buttonBackgroundColor
}
