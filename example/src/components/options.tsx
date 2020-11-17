import React from 'react'
import Fonts from './Fonts'
import RangeComponent from './RangeComponent'
import Title from './Title'
import ColorComponent from './colorComponents'
import CodeSnippet from './codeSnippet'
import ButtonTitle from './ButtonTitle'
import '../styles.css'

type OptionProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<{}>>
  theme: any
  title: string
  buttonTitle: any
  setButtonTitle: React.Dispatch<React.SetStateAction<string>>
}

const OptionForm = ({
  title,
  theme,
  setTitle,
  setTheme,
  setButtonTitle,
  buttonTitle
}: OptionProps) => {
  return (
    <div className='options'>
      <div className='information'>
        <h1>
          React Customisable Contact Form <span role='img'>👑 </span>
        </h1>
        <h3>
          A simple but highly customisable 'contact-me' component written in
          Typescript with React
        </h3>
      </div>
      <div className='installation'>
        <h4>How to Install</h4>
        <div className='installation_guide'>
          <h3>npm install react-customisable-contact-form</h3>
          <p>
            follow the docs on <span className='boldtitle'>npm!</span>
            <br /> customise your contact form below, grab the code snippet &
            paste into your project. Enjoy your stress free, validated and
            customisable form in seconds 🌼
          </p>
        </div>
      </div>
      <div className='form_customisation'>
        <h4>Customise the form 🌱</h4>
        <p> Form Font</p>
        <Fonts setTheme={setTheme} />
        <RangeComponent
          min={100}
          max={900}
          rangeName={'Font Weight'}
          measureUnit=''
          name='fontWeight'
          setTheme={setTheme}
        />

        <ColorComponent
          name='primaryColor'
          setTheme={setTheme}
          colorName='Form Primary Color'
        />
        <RangeComponent
          min={300}
          max={450}
          rangeName={'Form Width'}
          measureUnit='px'
          name='width'
          setTheme={setTheme}
        />
        <RangeComponent
          min={10}
          max={75}
          rangeName={'Form Padding'}
          measureUnit={'px'}
          name='formPadding'
          setTheme={setTheme}
        />
        <RangeComponent
          min={0}
          max={5}
          rangeName={'Form Border Weight'}
          measureUnit={'px'}
          name='formBorderWeight'
          setTheme={setTheme}
        />
        <ColorComponent
          name='formBorderColor'
          setTheme={setTheme}
          colorName='Form Border Colors'
        />

        <RangeComponent
          min={0}
          max={130}
          rangeName={'Form Border Radius'}
          measureUnit={'px'}
          name='formBorderRadius'
          setTheme={setTheme}
        />
        <ColorComponent
          name='backgroundColor'
          setTheme={setTheme}
          colorName='Form Background Color'
        />
      </div>
      <div className='heading_customisation'>
        <h4>Customise your heading 🌿 </h4>
        <p>Title</p>
        <Title setTitle={setTitle} />
        <ColorComponent
          name='headingBackgroundColor'
          setTheme={setTheme}
          colorName='Heading Background Color'
        />
        <RangeComponent
          min={0}
          max={50}
          rangeName={'Heading Border Radius'}
          measureUnit={'px'}
          name='headingBorderRadius'
          setTheme={setTheme}
        />
        <RangeComponent
          min={5}
          max={50}
          rangeName={'Heading Size'}
          measureUnit='px'
          name='headingSize'
          setTheme={setTheme}
        />
        <ColorComponent
          name='headingColor'
          setTheme={setTheme}
          colorName='Heading Color'
        />
        <RangeComponent
          min={0}
          max={5}
          rangeName={'Heading Border Bottom'}
          measureUnit={'px'}
          name='headingBorderBottom'
          setTheme={setTheme}
        />
        <ColorComponent
          name='headingBorderColor'
          setTheme={setTheme}
          colorName='Heading Border Color'
        />
      </div>
      <div className='input_customisation'>
        <h4>Customise your inputs 🍃 </h4>
        <RangeComponent
          min={0}
          max={50}
          rangeName={'Input Border Radius'}
          measureUnit={'px'}
          name='inputBorderRadius'
          setTheme={setTheme}
        />
        <RangeComponent
          min={0}
          max={5}
          rangeName={'Input Border Weight'}
          measureUnit={'px'}
          name='inputBorderWeight'
          setTheme={setTheme}
        />
        <ColorComponent
          name='inputBorderColor'
          setTheme={setTheme}
          colorName='Input Border Color'
        />

        <ColorComponent
          name='inputBackgroundColor'
          setTheme={setTheme}
          colorName='Input Background Color'
        />
      </div>
      <div className='message_input_customisation'>
        <h4>Customise your message input 🍀 </h4>
        <RangeComponent
          min={50}
          max={200}
          rangeName={'Message Input Height'}
          measureUnit={'px'}
          name='messageInputHeight'
          setTheme={setTheme}
        />
      </div>
      <div className='button_customisation'>
        <h4>Customise your Button 🌳 </h4>
        <p>Button Title</p>
        <ButtonTitle setButtonTitle={setButtonTitle} />
        <ColorComponent
          name='buttonFontColor'
          setTheme={setTheme}
          colorName='Button Font Color'
        />
        <RangeComponent
          min={0}
          max={40}
          rangeName={'Button Padding'}
          measureUnit={'px'}
          name='buttonPadding'
          setTheme={setTheme}
        />
        <RangeComponent
          min={0}
          max={20}
          rangeName={'Button Letter Spacing'}
          measureUnit={'px'}
          name='buttonLetterSpacing'
          setTheme={setTheme}
        />
        <ColorComponent
          name='buttonBackgroundColor'
          setTheme={setTheme}
          colorName='Button Background Color'
        />

        <ColorComponent
          name='buttonHoverColor'
          setTheme={setTheme}
          colorName='Button Hover Color'
        />
      </div>
      <div className='code'>
        <h4>Grab Your Component 💥 </h4>

        <CodeSnippet
          title={title}
          theme={{ ...theme }}
          buttonTitle={buttonTitle}
        />
      </div>
    </div>
  )
}

export default OptionForm
