import React, { ChangeEvent } from 'react'


type OptionProps = {
  setTheme?: any;
  theme?: Object;
}

const fonts: string[] = [
  'Chivo',
  'Arial',
  'Helvetica',
  'Verdana',
  'Trebuchet MS',
  'Gill Sans',
  'Noto Sans',
  'Avantgarde',
  'Optima',
  'Arial Narrow',
  'sans-serif',
  'Times',
  'Times New Roman',
  'Didot',
  'Georgia',
  'Palatino',
  'Bookman',
  'New Century Schoolbook',
  'American Typewriter',
  'serif',
  'Andale Mono',
  'Courier New',
  'Courier',
  'FreeMono',
  'OCR A Std',
  'DejaVu Sans Mono',
  'monospace',
  'Comic Sans MS',
  'Apple Chancery',
  'Bradley Hand',
  'Brush Script MT',
  'Snell Roundhand',
  'URW Chancery L',
  'cursive',
  'Impact',
  'Luminari',
  'Chalkduster',
  'Jazz LET',
  'Blippo',
  'Stencil Std',
  'Marker Felt',
  'Trattatello',
  'fantasy',
];

const Fonts = ({ setTheme }: OptionProps) => {

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setTheme({primaryFont : `${value}`});
  };

  return (
    <select onChange = {handleThemeChange}>
      <option>Select a Font!</option>
      {fonts.sort().map(font => (
        <option key = {font} value={font}>
          {font[0].toUpperCase() + font.slice(1)}
        </option>
      ))}
    </select>
  )
}

export default Fonts;