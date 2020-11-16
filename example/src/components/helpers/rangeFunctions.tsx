type rangeFunctionProps = {
  value: string
  setTheme: React.Dispatch<React.SetStateAction<{}>>
  measureUnit?: string
}

function fontWeight({ value, setTheme }: rangeFunctionProps) {
  const fontWeight = value
  setTheme((theme) => ({ ...theme, fontWeight }))
}

function width({ value, setTheme, measureUnit }: rangeFunctionProps) {
  const width = value + measureUnit
  setTheme((theme) => ({ ...theme, width }))
}

function formPadding({ value, setTheme, measureUnit }: rangeFunctionProps) {
  const formPadding = value + measureUnit
  setTheme((theme) => ({ ...theme, formPadding }))
}

function formBorderWeight({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const formBorderWeight = value + measureUnit
  setTheme((theme) => ({ ...theme, formBorderWeight }))
}

function formBorderRadius({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const formBorderRadius = value + measureUnit
  setTheme((theme) => ({ ...theme, formBorderRadius }))
}

function headingBorderRadius({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const headingBorderRadius = value + measureUnit
  setTheme((theme) => ({ ...theme, headingBorderRadius }))
}

function headingBorderBottom({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const headingBorderBottom = value + measureUnit
  setTheme((theme) => ({ ...theme, headingBorderBottom }))
}

function headingSize({ value, setTheme, measureUnit }: rangeFunctionProps) {
  const headingSize = value + measureUnit
  setTheme((theme) => ({ ...theme, headingSize }))
}

function inputBorderRadius({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const inputBorderRadius = value + measureUnit
  setTheme((theme) => ({ ...theme, inputBorderRadius }))
}

function inputBorderWeight({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const inputBorderWeight = value + measureUnit
  setTheme((theme) => ({ ...theme, inputBorderWeight }))
}

function messageInputHeight({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const messageInputHeight = value + measureUnit
  setTheme((theme) => ({ ...theme, messageInputHeight }))
}

function buttonPadding({ value, setTheme, measureUnit }: rangeFunctionProps) {
  const buttonPadding = value + measureUnit
  setTheme((theme) => ({ ...theme, buttonPadding }))
}

function buttonLetterSpacing({
  value,
  setTheme,
  measureUnit
}: rangeFunctionProps) {
  const buttonLetterSpacing = value + measureUnit
  setTheme((theme) => ({ ...theme, buttonLetterSpacing }))
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
  buttonLetterSpacing,
  headingSize,
  formBorderWeight,
  headingBorderBottom,
  inputBorderWeight
}
