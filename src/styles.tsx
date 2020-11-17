import styled from 'styled-components'

export const StyledHeading = styled.h1`
  font-weight: ${(props: any) => props.theme.fontWeight};
  color: ${(props: any) => props.theme.headingColor};
  text-align: center;
  padding-bottom: 10px;
  border-bottom: ${(props: any) => props.theme.headingBorderBottom} solid
    ${(props: any) => props.theme.headingBorderColor};
  font-family: ${(props: any) => props.theme.primaryFont};
  font-size: ${(props: any) => props.theme.headingSize};
  background-color: ${(props: any) => props.theme.headingBackgroundColor};
  border-radius: ${(props: any) => props.theme.headingBorderRadius};
  display: flex;
  justify-content: center;
`

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: ${(props: any) => props.theme.inputBorderRadius};
  border: ${(props: any) => props.theme.inputBorderWeight} solid
    ${(props: any) => props.theme.inputBorderColor};
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  height: 40px;
  background-color: ${(props: any) => props.theme.inputBackgroundColor};
`

export const StyledMessageInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: ${(props: any) => props.theme.inputBorderRadius};
  border: ${(props: any) => props.theme.inputBorderWeight} solid
    ${(props: any) => props.theme.inputBorderColor};
  padding: 10x 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: ${(props: any) => props.theme.inputBackgroundColor};
  height: ${(props: any) => props.theme.messageInputHeight};
`

export const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: ${(props: any) => props.theme.primaryColor};
  font-size: 14px;
  font-weight: 200;
  font-family: ${(props: any) => props.theme.primaryFont};
`
export const StyledButton = styled.button`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: ${(props: any) => props.theme.inputBorderRadius};
  border: ${(props: any) => props.theme.inputBorder};
  padding: 10px 15px;
  margin-bottom: 10px;
  background: grey;
  text-align: center;
  background-color: ${(props: any) => props.theme.buttonBackgroundColor};
  color: ${(props: any) => props.theme.buttonFontColor};
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: ${(props: any) => props.theme.buttonPadding};
  font-size: 16px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  letter-spacing: ${(props: any) => props.theme.buttonLetterSpacing};
  &:hover {
    background: grey;
  }
  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`

export const StyledForm = styled.form`
  width: ${(props: any) => props.theme.width};
  margin: auto;
  margin-top: 1em;
  border: ${(props: any) => props.theme.formBorderWeight} solid
    ${(props: any) => props.theme.formBorderColor};
  color: ${(props: any) => props.theme.primaryColor};
  background-color: ${(props: any) => props.theme.backgroundColor};
  padding: ${(props: any) => props.theme.formPadding};
  border-radius: ${(props: any) => props.theme.formBorderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
