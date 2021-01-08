import React, { useState }from 'react'
import { Button } from '../../globalStyles'
import {
  BookTripEl,
  BookTripRow,
  FormHeading,
  Form,
  FormLabel,
  Input,
  BtnLink
} from './BookTrip.elements'

const BookTrip = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <BookTripEl>
        <BookTripRow>
          <FormHeading>
            To Book Your Trip Please Fill Out The Below Form
          </FormHeading>
          <Form>
            <FormLabel>
              First Name
            </FormLabel>
            <Input />
            <FormLabel>
              Last Name
            </FormLabel>
            <Input />
            <FormLabel>
              Email
            </FormLabel>
            <Input />
            <BtnLink to='/form-submit'>
              <Button primary handleClick={click}>Submit</Button>
            </BtnLink>
          </Form>
        </BookTripRow>
      </BookTripEl>
    </>
  )
}

export default BookTrip
