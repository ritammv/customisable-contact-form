import React from 'react'
import Form  from 'customisable-contact-form'
import { Heading, FirstName, LastName, Email, Message, SubmitButton } from 'customisable-contact-form'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: space-between;
min-height: 100vh;


`


const FormContainer = styled.div`
flex: 1;
display: flex;
flex-direction: row;
padding: 40px;
border: 1px solid lightgrey;
background-color: red;
height: auto;



`

const Customisation = styled.div`
flex: 2;
display: flex;
justify-content: flex-start;
flex-direction: row;
background-color: blue;

`


const App = () => {
  return (
    <Container className="demo">
      <FormContainer className="form_demo">
        <Form theme={{
      //your customisations go here!
        }}>
          <Heading title={"Get in touch!"} />
          <FirstName />
          <LastName  />
          <Email/>
          <Message/>
          <SubmitButton/> 
        </Form>
    </FormContainer>
    

    <Customisation className="customisation">
      <h1>Customisations go here!</h1>

    </Customisation>
    </Container>
  )
}

export default App
