import React, { useState } from 'react';
import axios from 'axios';
import './VendorPage.css'
import { useNavigate } from 'react-router-dom';
import YourComponent from './show';
import MyComponent from './../../test/src/MyComponent';
// YourComponent.jsx
import { URL } from './config';


const Search = () => {
  const [collectionName, setCollectionName] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [specName, setSpecName] = useState('');
  const [results, setResults] = useState([]);
  const navigate=useNavigate()
  const handleRequest = async () => {
    try {
      const response = await axios.post(`${URL}gfc`, {
        collectionName: collectionName,
        fieldName: fieldName,
        specName: specName
      });

      setResults(response.data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleShow= ()=>{
    try{
      navigate("/show")
    }
    catch(error){
      console.log(error)
    }
  }
  const handleBid = (userid, collectionName) => {
    try {
      navigate(`/bid/${collectionName}/${userid}`); // Use the collectionName and userid to navigate to a specific bid route
    } catch (error) {
      console.log(error);
    }
  };
  
  
  

  return (
    <>
    <div className='search-container'>
      <h1>Check Phone</h1>
      <div>
        <label>
          Phone Name:
          <input type="text" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Component Name:
          <input type="text" value={fieldName} onChange={(e) => setFieldName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Specification:
          <input type="text" value={specName} onChange={(e) => setSpecName(e.target.value)} />
        </label>
      </div>
      <button className='bit1'onClick={handleRequest}>Search</button>
      <button className='bit2'onClick={handleShow}>Show all</button>
      </div>
      <div className='result'>
        <h2>Results:</h2>
        {/* <ul>
          {results.map((result, index) => (
            <li key={index}>{JSON.stringify(result)}</li>
          ))}
        </ul> */}
        <ul>
    {     results.map((result, index) => (
        <li className="lis" key={index}>
            
            <strong>Phone: {result.phone}</strong><br />
            <strong>Speaker: {result.speaker}</strong><br />
            <strong>Screen: {result.screen}</strong><br />
            <strong>Sensor: {result.sensor}</strong><br />
            <strong>Camera: {result.camera}</strong><br />
            <strong>Battery: {result.battery}</strong><br />
            <strong>Trigger Motor: {result.triggermotor}</strong><br/>
            <strong>Bid Amount: {result.bidding}</strong>
            <br></br>
            <button className="bid" onClick={() => handleBid(result.userid, collectionName)}>Bid</button>

        </li>
    ))}
</ul>
      </div>
    </>
  );
};

export default Search;