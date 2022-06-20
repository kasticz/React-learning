import React, { useState } from 'react';
import Form from './components/Form/Form';
import './App.css'
import Modal from './components/Modal';
import AllUsers from './components/Users/AllUsers';

function App() {
  const [invalidMsg,setinvalidMsg] = useState(``)
  const [currAllUsers,setCurrAllUsers] = useState([])
  function getInvalidInputs(errorMsg){
    setinvalidMsg(errorMsg)
  }
  function onCloseModal(){
    setinvalidMsg(``)
  }
  function onSaveNewUser(newUser){
    setCurrAllUsers((prevState)=>{
      return [
        ...prevState,
        newUser
      ]
    })    
  }
  return (
    <div className='body'>
      { invalidMsg ? <Modal error={invalidMsg} onCloseModal={onCloseModal}/> : `` }
      <Form onSaveNewUser={onSaveNewUser}onGetInvalidInputs={getInvalidInputs}/> 
      <AllUsers AllUsers={currAllUsers} />          
    </div>
  );
}

export default App;
