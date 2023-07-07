import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateTypeModal from '../components/modals/CreateTypeModal'
import CreateBrandModal from '../components/modals/CreateBrandModal'
import CreateDeviceModal from '../components/modals/CreateDeviceModal'

const Admin = () => {
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  return (
    <Container>
      <Button
        variant='outline-dark'
        className='mt-2 me-2'
        onClick={() => setShowTypeModal(true)}
      >
        Add a new type
      </Button>
      <Button
        variant='outline-dark'
        className='mt-2 me-2'
        onClick={() => setShowBrandModal(true)}
      >
        Add a new brand
      </Button>
      <Button
        variant='outline-dark'
        className='mt-2 me-2'
        onClick={() => setShowDeviceModal(true)}
      >
        Add a new device
      </Button>
      <CreateTypeModal show={showTypeModal} onHide={() => setShowTypeModal(false)} />
      <CreateBrandModal show={showBrandModal} onHide={() => setShowBrandModal(false)} />
      <CreateDeviceModal show={showDeviceModal} onHide={() => setShowDeviceModal(false)} />
    </Container>
  )
}

export default Admin