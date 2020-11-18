# customisable-contact-form

> a simple but highly customisable react contact form component

[![NPM](https://img.shields.io/npm/v/customisable-contact-form.svg)](https://www.npmjs.com/package/customisable-contact-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install customisable-contact-form
```

you might also need to install peer dependencies

`npm i styled-components react-hook-form`

## How to use!

Firstly - check out the DEMO and customise your form!

Import what you need from the package - if you don't need a last name component then don't import it!!!

Grab the code and paste it into your project!

```
import Form from 'customisable-contact-form'
import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'

```

Next - use it in your application!

```
function example() {
  render() {
    return <Form theme={
      buttonBackgroundColor = "red",
    }
    Heading title={'Hey guys!}
    FirstName
    LastName
    Email
    Message
    SubmitButton buttonTitle={'Send'}
    />
  }
}
```

## Config

Please remember that theme accepts an Object and can accept the following parameters!

```
const theme = {
  primaryColor,
  primaryFont,
  buttonLetterSpacing,
  buttonPadding,
  buttonBackgroundColor,
  buttonFontColor,
  headingBackgroundColor,
  headingBorderRadius,
  headingSize,
  headingColor,
  inputBackgroundColor,
  inputBorderRadius,
  inputBorderWeight,
  inputBorderColor,
  formPadding,
  formBorderRadius,
  formBorderWeight,
  formBorderColor,
  backgroundColor',
  title,
  fontWeight,
  width,
  headingBorderBottom,
  headingBorderColor,
  messageInputHeight,
  buttonHoverColor'
}
```

## License

MIT © [ritammv](https://github.com/ritammv)
