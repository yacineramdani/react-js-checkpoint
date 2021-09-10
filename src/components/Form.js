import React from 'react';
import {
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement
} from 'mdb-react-ui-kit';
import "./form.css"

export default function Form() {
  return (
    <div className="form">
      <MDBInputGroup className='mb-3   mt-4'>
        <MDBInputGroupText>@</MDBInputGroupText>
        <MDBInputGroupElement type='text' placeholder="Recipient's username" />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3'>
        <MDBInputGroupElement type='text' placeholder="Recipient's username" />

        <MDBInputGroupText>@example.com</MDBInputGroupText>
      </MDBInputGroup>

      <label htmlFor='basic-url' className='form-label'>
        Your vanity URL
      </label>
      <MDBInputGroup className='mb-3'>
        <MDBInputGroupText>https://example.com/users/</MDBInputGroupText>
        <MDBInputGroupElement id='basic-url' type='text' />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3'>
        <MDBInputGroupText>$</MDBInputGroupText>
        <MDBInputGroupElement type='text' />
        <MDBInputGroupText>.00</MDBInputGroupText>
      </MDBInputGroup>

      <MDBInputGroup className='mb-3'>
        <MDBInputGroupElement placeholder='Username' type='text' />
        <MDBInputGroupText>@</MDBInputGroupText>
        <MDBInputGroupElement placeholder='Server' type='text' />
      </MDBInputGroup>

      <MDBInputGroup className='mb-5'>
        <MDBInputGroupText>With textarea</MDBInputGroupText>
        <MDBInputGroupElement textarea type='text' />
      </MDBInputGroup>

</div>
   
  );
}