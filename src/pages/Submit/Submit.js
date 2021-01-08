import React from 'react'
import {
  SubmitEl,
  SubmitRow,
  Heading,
  BottomLine,

} from './Submit.elements'

const Submit = () => {
  return (
    <>
      <SubmitEl>
        <SubmitRow>
          <Heading>
            Thank You For Your Interest
          </Heading>
          <BottomLine>
            We Will Be Contacting You Shortly
          </BottomLine>
        </SubmitRow>
      </SubmitEl>
    </>
  )
}

export default Submit
