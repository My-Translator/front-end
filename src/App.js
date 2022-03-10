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


export default function App() {

  const API = 'https://hema-translator.herokuapp.com/';

  const [word, setWord] = useState();
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    function fetchData() {
      axios.get(`${API}/getAllWords`)
        .then(res => {
          setWord(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, [])

  const handleSubmit = (word, translation) => {
    axios.post(`${API}/newWord`, { word, translation })
      .then(res => {
        setWord(res.data);
      })
      .catch(err => console.log(err));
  }

  const handleShowModal=()=>{
    setShowModal(true);
  }
  const handleClose = () => {
    setShowModal(false);
  }


  return (
    <div className='app'>

      <NavBar setShowModal={setShowModal} />

      <WordSpace word={word} />
      <Button id='add_button' variant="success" onClick={handleShowModal}>Add Word</Button>

      <Footer />

      <AddingModal showModal={showModal} handleClose={handleClose} handleSubmit={handleSubmit} />


    </div>
  )
}
