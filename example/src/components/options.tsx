import React from 'react';
import { Theme } from '../../../dist/Form';
import Fonts from './Fonts'



type OptionProps = {
  title: string;
  setTitle: any;
  theme: Theme;
  setTheme: any;
}

const OptionForm = ({ theme, setTheme}: OptionProps) => {
  return (
    <div className="options">
      <h1>Customisation through the components props!</h1>
      <div className="Form Customisation">
        <h1>Customise the form!</h1>
        <h3>Font</h3>
        <Fonts theme={theme} setTheme={setTheme}/>

        <h3>Font Weight</h3>
        <h3>Primary Colors</h3>
        <h3>Width</h3>
        <h3>Form Padding</h3>
        <h3>Form Border</h3>
        <h3>Form Border Radius</h3>
        <h3>Form Background Color</h3>
      </div>
      <div className="heading_customisation">
        <h1>Customise your heading!</h1>
        <h3>Title</h3>
        <h3>Heading Background Color</h3>
        <h3>Heading Border Radius</h3>
        <h3>Heading Border Bottom</h3>

      </div><div className="input_customisation">
        <h1>Customise your inputs!</h1>
        <h3>Input Border Radius</h3>
        <h3>Input Border </h3>
        <h3>Input Background Color</h3>
      </div>
      <div className="message_input_customisation">
        <h1>Customise your message input!</h1>
        <h3>Message Input Height</h3>
        
      </div>
      <div className="button_customisation">
        <h1>Customise your Button!</h1>
        <h3>Button Font Color</h3>
        <h3>Button Padding</h3>
        <h3>Button Letter Spacing</h3>
        <h3>Button Background Color</h3>
      </div>
      <div className="code_snippet">
        <h1>Customise your Button!</h1>
        <h3>Button Font Color</h3>
        <h3>Button Padding</h3>
        <h3>Button Letter Spacing</h3>
        <h3>Button Background Color</h3>
      </div>
    </div>
  )
}

export default OptionForm;