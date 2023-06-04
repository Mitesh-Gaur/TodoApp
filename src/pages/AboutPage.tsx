import React, { useEffect, useState } from 'react'
import { CustomNavbar } from '../components'
import '../styles/global.sass'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export default function AboutPage() {
  const [show, setShow] = useState(false);

  return (
    <>
    <CustomNavbar />
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  )
}
