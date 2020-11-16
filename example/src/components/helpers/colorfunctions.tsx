type colorFunctionProps = {
  value: string
  setTheme: React.Dispatch<React.SetStateAction<{}>>
}

function primaryColor({ value, setTheme }: colorFunctionProps) {
  const primaryColor = value
  setTheme((theme) => ({ ...theme, primaryColor }))
}

function formBorderColor({ value, setTheme }: colorFunctionProps) {
  const formBorderColor = value
  setTheme((theme) => ({ ...theme, formBorderColor }))
}

function backgroundColor({ value, setTheme }: colorFunctionProps) {
  const backgroundColor = value
  setTheme((theme) => ({ ...theme, backgroundColor }))
}

function headingBackgroundColor({ value, setTheme }: colorFunctionProps) {
  const headingBackgroundColor = value
  setTheme((theme) => ({ ...theme, headingBackgroundColor }))
}
function headingColor({ value, setTheme }: colorFunctionProps) {
  const headingColor = value
  setTheme((theme) => ({ ...theme, headingColor }))
}

function headingBorderColor({ value, setTheme }: colorFunctionProps) {
  const headingBorderColor = value
  setTheme((theme) => ({ ...theme, headingBorderColor }))
}

function inputBackgroundColor({ value, setTheme }: colorFunctionProps) {
  const inputBackgroundColor = value
  setTheme((theme) => ({ ...theme, inputBackgroundColor }))
}

function inputBorderColor({ value, setTheme }: colorFunctionProps) {
  const inputBorderColor = value
  setTheme((theme) => ({ ...theme, inputBorderColor }))
}

function buttonFontColor({ value, setTheme }: colorFunctionProps) {
  const buttonFontColor = value
  setTheme((theme) => ({ ...theme, buttonFontColor }))
}

function buttonBackgroundColor({ value, setTheme }: colorFunctionProps) {
  const buttonBackgroundColor = value
  setTheme((theme) => ({ ...theme, buttonBackgroundColor }))
}
export default {
  primaryColor,
  backgroundColor,
  headingBackgroundColor,
  inputBackgroundColor,
  buttonFontColor,
  buttonBackgroundColor,
  headingColor,
  formBorderColor,
  headingBorderColor,
  inputBorderColor
}
