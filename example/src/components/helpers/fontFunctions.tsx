type fontFunctionProps = {
  value: string
  setTheme: React.Dispatch<React.SetStateAction<{}>>
}

function primaryFont({ value, setTheme }: fontFunctionProps) {
  const primaryFont = value
  setTheme((theme) => ({ ...theme, primaryFont }))
}

export default {
  primaryFont
}
