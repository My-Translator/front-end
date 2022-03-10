import React from 'react';
import { Modal,Form,Button } from "react-bootstrap"

export default function AddingModal(props) {

const handleSubmit = (e)=>{
    e.preventDefault();
    const word = e.target.word.value.charAt(0).toUpperCase() + e.target.word.value.slice(1);
    const translation = e.target.translation.value;
    props.handleSubmit(word,translation);
    props.handleClose();
}
    return (
        <div>
            <Modal show={props.showModal} onHide={props.handleClose}>
                <Modal.Header>
                    <i onClick={props.handleClose} className="fas fa-times"></i>
                    <Modal.Title >Add Word</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Word</Form.Label>
                            <Form.Control  name="word" type="text" placeholder="Enter word" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Translation</Form.Label>
                            <Form.Control   name="translation" type="text" placeholder="Enter translation" required/>
                        </Form.Group>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Add Word
                        </Button>
                    </Modal.Footer>

                </Form>
            </Modal>
        </div>
    )
}
