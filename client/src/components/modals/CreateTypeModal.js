import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CreateTypeModal = ({ show, onHide }) => {
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
                    Add a new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Control placeholder='Write down a new type' />
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
  )
}

export default CreateTypeModal