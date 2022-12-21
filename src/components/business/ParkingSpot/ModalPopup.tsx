import { Button } from '@dnb/eufemia'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
interface ModalPopupProps {
  show: boolean
  handleSubmit: () => void
  handleClose: () => void
  children: any
  text: string
}
const ModalPopup = (props: ModalPopupProps) => {
  const { show, handleClose, handleSubmit, children, text } = props

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalPopup
