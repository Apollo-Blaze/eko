import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YourComponent.css';
import './custome.css'

const YourComponent = () => {
  const [results, setResults] = useState([]);
  const [collection, setCollection] = useState('');
  const [userid, setUserid] = useState('');

  const handleShow = async () => {
    try {
      const response = await axios.post('http://172.17.103.9:3000/gfc1', {
        collection: collection,
        userid: userid,
      });

      setResults(response.data.results);
      console.log(results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="showcont">
      <h1>All Phones</h1>
      <input
        className='pmodel'
        type="text"
        value={collection}
        onChange={(e) => setCollection(e.target.value)}
        placeholder="Enter phone model"
      />
      <input
        className='useri'
        type="text"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
        placeholder="Enter user ID"
      />
      <button className='showcb' onClick={handleShow}>Show</button>
      <ul>
        {results.map((item, index) => (
          <div className="phones" key={index}>
            <p><strong>Collection:</strong> {collection}</p>
            <p><strong>ID:</strong> {userid}</p>
            <p><strong>Trigger Motor:</strong> {item.triggermotor}</p>
            <p><strong>Speaker Details:</strong> {item.speaker}</p>
            <p><strong>Screen:</strong> {item.screen}</p>
            <p><strong>Sensor:</strong> {item.sensor}</p>
            <p><strong>Camera:</strong> {item.camera}</p>
            <p><strong>Battery:</strong> {item.battery}</p>
            <p><strong>Name:</strong> {item.userid}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Bidding:</strong> {item.bidding}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
