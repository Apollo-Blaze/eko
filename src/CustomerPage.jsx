import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImeiReader from './barcodereader';
import { useNavigate } from 'react-router-dom';
import './CustomerPage.css'



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
  // const handleShow = async () => {
  //   try {
  //     const response = await axios.post('http://172.17.103.9:3000/gfc', {
  //       collectionName: collectionName,
  //       userid: fieldName,
  //     });

  //     setResults(response.data.results);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  async function handleClick(event) {
    setIsSuccessful(true);
    event.preventDefault();
    try {
      const response = await axios.post('http://172.17.103.9:3000/database-text', {

        inputString: t,
        userid: u,
        phone: p,
      });
      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  }
  const handleShow = () => {
    try {
      navigate("/showc");
    } catch (error) {
      console.log(error);
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
  const handleModel=()=>{
      navigate('/model');
  }

  useEffect(() => {
    console.log('isSuccessful:', isSuccessful);
  }, [isSuccessful]);

  return (
    <div className="contain">
      <h1>Customer Page</h1>

      <label className='customer'>Upload IMEI code:</label>
      <div className='bar'>
      <ImeiReader className="imei" />
      </div>
      <p className='nor'>or</p>
      <p className='or' >Upload photo of component</p>
      <p className="linker" onClick={handleModel}>Click here</p>
      <p className='nor'>or</p>
      <p className='model'>Model Number:</p>
      <input type="text" onChange={handleText} placeholder='Enter the model'></input>
      <input type="text" onChange={handleu} placeholder='Enter username'></input>
      <input type="text" onChange={handlep} placeholder='Enter phone number'></input>
      <div className='buttons'>
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleShow}>Show All</button>
      <button onClick={handleDelete}>Delete record</button>
      <button onClick={handleUpdate}>Update record</button>
      </div>
      {isSuccessful ? <p className='success'>Successful</p> : <p></p>}
    </div>
  );
};

export default CustomerPage;
