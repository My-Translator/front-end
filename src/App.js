import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import WordSpace from './components/WordSpace';
import Footer from './components/Footer';
import AddingModal from './components/AddingModal';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateModal from './components/UpdateModal';


export default function App() {

  const API = 'https://hema-translator.herokuapp.com';
  // const API = 'http://localhost:5000';


  const [word, setWord] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState();


  useEffect(() => {
    function fetchData() {
      axios.get(`${API}/getAllWords`)
        .then(res => {
          setWord(res.data);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, [])

  

  const handleShowModal=()=>{
    setShowModal(true);
  }

  const handleShowUpdateModal=(word)=>{
    setShowUpdateModal(true);
    setSelectedWord(word);
  }

  const handleClose = () => {
    setShowModal(false);
    setShowUpdateModal(false);
  }


  const handleSubmit = (word, translation) => {
    axios.post(`${API}/newWord`, { word, translation })
      .then(res => {
        setWord(res.data);
      })
      .catch(err => console.log(err));
  }

  const handleUpdate = (id, word, translation) => {
    axios.put(`${API}/updateWord`, { id, word, translation })
      .then(res => {
        setWord(res.data);
      })
      .catch(err => console.log(err));
  }


  return (
    <div className='app'>

      <NavBar setShowModal={setShowModal} />

      <WordSpace word={word} handleShowUpdateModal={handleShowUpdateModal}/>
      <Button id='add_button' variant="success" onClick={handleShowModal}>Add Word</Button>

      <Footer />

      <AddingModal showModal={showModal} handleClose={handleClose} handleSubmit={handleSubmit} />
      <UpdateModal selectedWord={selectedWord} showUpdateModal={showUpdateModal} handleUpdate={handleUpdate} handleClose={handleClose}/>

    </div>
  )
}
