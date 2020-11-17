import React, { useState } from 'react'
import Form from 'customisable-contact-form'
import {
  Heading,
  FirstName,
  LastName,
  Email,
  Message,
  SubmitButton
} from 'customisable-contact-form'
import OptionForm from './components/options'
import './styles.css'

const App = () => {
  const [theme, setTheme] = useState({})
  const [title, setTitle] = useState('')
  const [buttonTitle, setButtonTitle] = useState('')

  return (
    <div className='website_container'>
      <div className='demo_container'>
        <div className='form_demo'>
          <Form theme={theme}>
            <Heading title={title} />
            <FirstName />
            <LastName />
            <Email />
            <Message />
            <SubmitButton buttonTitle={buttonTitle} />
          </Form>
        </div>

        <div className='customisation_options'>
          <OptionForm
            theme={theme}
            title={title}
            setTitle={setTitle}
            setTheme={setTheme}
            buttonTitle={buttonTitle}
            setButtonTitle={setButtonTitle}
          />
        </div>
      </div>
      <div className='footer'>
        <footer>Made with 🖤 by Ritam Verma</footer>
        <a href='www.https://github.com/ritammv'>Github </a>
        <a href='https://www.linkedin.com/in/ritammv/'>LinkedIn</a>
      </div>
    </div>
  )
}

export default App
