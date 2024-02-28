import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyComponent from '../../test/src/MyComponent';
import './YourComponent.css';

const FeatureItem = ({ label, value }) => (
  <div>
    <strong>{label}:</strong> {value}
  </div>
);

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5173/allDocuments');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <h1>All Documents</h1>
      {!showAll && (
        <ul>
          {data.map((item, index) => (
            <div className="card" key={index}>
              <h2>Document {index + 1}</h2>
              <p><strong>Collection:</strong> {item.collection}</p>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Trigger Motor:</strong> {item.triggermotor}</p>
      <p><strong>Speaker Details:</strong> {item.speaker}</p>
      <p><strong>Screen:</strong> {item.screen}</p>
      <p><strong>Sensor:</strong> {item.sensor}</p>
      <p><strong>Camera:</strong> {item.camera}</p>
      <p><strong>Battery:</strong> {item.battery}</p>
      <p><strong>Name:</strong> {item.userid}</p>
      <p><strong>Phone:</strong> {item.phone}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourComponent;
