import React from 'react'
import { Theme } from '../../../dist/Form'
import Fonts from './Fonts'
import RangeComponent from './RangeComponent'
import Title from './Title'
import ColorComponent from './colorComponents'

type OptionProps = {
  title: string
  setTitle: any
  theme: Theme
  setTheme: any
}

const OptionForm = ({ title, setTitle, theme, setTheme }: OptionProps) => {
  return (
    <div className='options'>
      <h1>Customisation through the components props!</h1>
      <div className='Form Customisation'>
        <h1>Customise the form!</h1>
        <h3>Font</h3>
        <Fonts theme={theme} setTheme={setTheme} />
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
          measureUnit=''
          setTheme={setTheme}
          colorName='Form primary colors'
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
        <h3>Form Border</h3>
        <RangeComponent
          min={0}
          max={130}
          rangeName={'Form Border Radius'}
          measureUnit={'px'}
          name='formBorderRadius'
          setTheme={setTheme}
        />
        <ColorComponent
          name='formBackgroundColor'
          measureUnit=''
          setTheme={setTheme}
          colorName='Form Background Color'
        />
      </div>
      <div className='heading_customisation'>
        <h1>Customise your heading!</h1>
        <Title title={title} setTitle={setTitle} />
        <ColorComponent
          name='headingBackgroundColor'
          measureUnit=''
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
        <h3>Heading Border Bottom</h3>
      </div>
      <div className='input_customisation'>
        <h1>Customise your inputs!</h1>
        <RangeComponent
          min={0}
          max={50}
          rangeName={'Input Border Radius'}
          measureUnit={'px'}
          name='inputBorderRadius'
          setTheme={setTheme}
        />
        <h3>Input Border </h3>
        <ColorComponent
          name='inputBackgroundColor'
          measureUnit=''
          setTheme={setTheme}
          colorName='Input Background Color'
        />
      </div>
      <div className='message_input_customisation'>
        <h1>Customise your message input!</h1>
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
        <h1>Customise your Button!</h1>
        <ColorComponent
          name='buttonFontColor'
          measureUnit=''
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
          max={35}
          rangeName={'Button Letter Spacing'}
          measureUnit={'px'}
          name='buttonLetterSpacing'
          setTheme={setTheme}
        />
        <ColorComponent
          name='buttonBackgroundColor'
          measureUnit=''
          setTheme={setTheme}
          colorName='Button Background Color'
        />
      </div>
      <div className='code_snippet'>
        <h1>Grab your code</h1>
      </div>
    </div>
  )
}

export default OptionForm
