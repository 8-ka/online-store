import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CreateBrandModal = ({ show, onHide }) => {
  return (
    <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Control placeholder='Write down a new brand' />
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
  )
}

export default CreateBrandModal