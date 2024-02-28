import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImeiReader from './barcodereader';
import { useNavigate } from 'react-router-dom';

const CustomerPage = () => {
  const navigate = useNavigate(); // Correct way to use useNavigate hook
  const [t, setT] = useState('');
  const [u, setu] = useState('');
  const [p, setp] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  function handleText(event) {
    setT(event.target.value);
  }

  function handleu(event) {
    setu(event.target.value);
  }

  function handlep(event) {
    setp(event.target.value);
  }

  async function handleClick(event) {
    setIsSuccessful(true);
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.64.26:3000/database-text', {
        inputString: t,
        userid: u,
        phone: p,
      });
      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  }

  const handleDelete = () => {
    try {
      navigate("/delete");
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = () => {
    try {
      navigate("/update");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log('isSuccessful:', isSuccessful);
  }, [isSuccessful]);

  return (
    <div>
      <h1>Customer Page</h1>

      <label className='customer'>Customer Input:</label>
      <br />
      <ImeiReader />

      <p>Model Number:</p>
      <input type="text" onChange={handleText} placeholder='Enter the model'></input>
      <input type="text" onChange={handleu} placeholder='Enter username'></input>
      <input type="text" onChange={handlep} placeholder='Enter phone number'></input>
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleDelete}>Delete record</button>
      <button onClick={handleUpdate}>Update record</button>
      {isSuccessful ? <p>Successful</p> : <p></p>}
    </div>
  );
};

export default CustomerPage;
