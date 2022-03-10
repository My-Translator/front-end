import React from 'react';
import { Modal,Form,Button } from "react-bootstrap"

export default function UpdateModal(props) {

    const handleSubmit = (e)=>{
        e.preventDefault();
        let word;
        let translation;

        if(e.target.word.value){
             word = e.target.word.value.charAt(0).toUpperCase() + e.target.word.value.slice(1);
        } else {
           word = props.selectedWord.word
        }

        if(e.target.translation.value){
             translation = e.target.translation.value;
        } else {
           translation = props.selectedWord.translation
        }


        props.handleUpdate(props.selectedWord.id, word,translation);
        props.handleClose();
    }
  return (
    <div>
        <Modal show={props.showUpdateModal} onHide={props.handleClose}>
                <Modal.Header>
                    <i onClick={props.handleClose} className="fas fa-times"></i>
                    <Modal.Title >Update Word</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Word</Form.Label>
                            <Form.Control  name="word" type="text" placeholder="Enter word" defaultValue={props?.selectedWord?.word} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Translation</Form.Label>
                            <Form.Control   name="translation" type="text" placeholder="Enter translation" defaultValue={props?.selectedWord?.translation} />
                        </Form.Group>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Update Word
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
    </div>
  )
}
