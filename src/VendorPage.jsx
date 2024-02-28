import React, { useState } from 'react';
import axios from 'axios';
import './VendorPage.css'
import { useNavigate } from 'react-router-dom';
import YourComponent from './show';
import MyComponent from './../../test/src/MyComponent';

const Search = () => {
  const [collectionName, setCollectionName] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [specName, setSpecName] = useState('');
  const [results, setResults] = useState([]);
  const navigate=useNavigate()
  const handleRequest = async () => {
    try {
      const response = await axios.post('http://172.17.103.9:3000/gfc', {
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
      <button onClick={handleRequest}>Search</button>
      <button onClick={handleShow}>Show all</button>
      <div className='result'>
        <h2>Results:</h2>
        {/* <ul>
          {results.map((result, index) => (
            <li key={index}>{JSON.stringify(result)}</li>
          ))}
        </ul> */}
        <ul>
    {     results.map((result, index) => (
        <li key={index}>
            
            <strong>Phone:</strong> {result.phone}<br />
            <strong>Speaker:</strong> {result.speaker}<br />
            <strong>Screen:</strong> {result.screen}<br />
            <strong>Sensor:</strong> {result.sensor}<br />
            <strong>Camera:</strong> {result.camera}<br />
            <strong>Battery:</strong> {result.battery}<br />
            <strong>Trigger Motor:</strong> {result.triggermotor}
            <button className="bid" onClick={() => handleBid(result.userid, collectionName)}>Bid</button>

        </li>
    ))}
</ul>
      </div>
    </div>
  );
};

export default Search;