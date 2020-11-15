import React , { useState} from 'react'
import Form  from 'customisable-contact-form'
import { Heading, FirstName, LastName, Email, Message, SubmitButton } from 'customisable-contact-form'
import styled from 'styled-components'
import OptionForm from './components/options'


const Container = styled.div`
display: flex;
justify-content: space-between;
height: 100vh;
overflow: hidden;

`

const FormContainer = styled.div`
flex: 2;
display: flex;
flex-direction: row;
padding: 40px;
border: 1px solid lightgrey;
background-color: red;
height: auto;
`

const Customisation = styled.div`
flex: 3;
display: flex;
justify-content: center;
flex-direction: row;
background-color: blue;
padding-left: 30px;
overflow: scroll;

`


const App = () => {

  const [theme, setTheme] = useState({});
  const [title, setTitle] = useState('');

  return (
    <Container className="demo">
      <FormContainer className="form_demo">
        <Form theme={theme}>
          <Heading title={title} />
          <FirstName />
          <LastName  />
          <Email/>
          <Message/>
          <SubmitButton/> 
        </Form>
    </FormContainer>
    

    <Customisation className="customisation">
      <OptionForm
        title = {title}
        setTitle = {setTitle}
        theme = {theme}
        setTheme = {setTheme}
        />
    </Customisation>
    </Container>
  )
}

export default App
