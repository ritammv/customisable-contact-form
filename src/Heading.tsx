import * as React from 'react';
import { StyledHeading } from './styles'

interface headingProps {
  title: string
}

function Heading({title}: headingProps) {
  return (
    <div className = "heading_wrapper">
      <StyledHeading> {title || 'Get in touch!'}</StyledHeading>
    </div>
  )
}

export default Heading;
