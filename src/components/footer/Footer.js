import React from 'react'
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubText,
  FooterTrip
} from './Footer.elements'

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterTrip>
          <FooterSubHeading>
            For Special Inquires Contact Us At:
          </FooterSubHeading>
          <FooterSubText>
            mitchellmujwit@protonmail.com
          </FooterSubText>
        </FooterTrip>
      </FooterContainer>
    </div>
  )
}

export default Footer
