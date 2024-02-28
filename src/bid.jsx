import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BiddingPage = () => {
  const { collectionName, userId } = useParams(); // Get the collection name and user ID from the route params
  const [bidAmount, setBidAmount] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState(0);
  const [isValidBid, setIsValidBid] = useState(true);
  
  const handleBidChange = (event) => {
    setBidAmount(event.target.value);
    setIsValidBid(true); // Reset validity when bid amount changes
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };


  const handleBidSubmit = async () => {
    console.log(collectionName);

    try {
      console.log("hi")
        const response = await axios.put('http://172.17.103.9:3000/biddinguser', {
          collection: collectionName,
          phoneNumber: phoneNumber,
          amount: bidAmount, // Convert bidAmount to an integer
          userid: userId
        });
        console.log("hello")
        console.log(response.data);
    } catch (error) {
        console.error('Error updating document:', error);
    }
};

  return (
    <Container style={{ padding: '20px', borderRadius: '5px', background: 'cyan' }}>
      <Typography variant="h4" gutterBottom>
        Bidding Page
      </Typography>
      <Typography variant="h6" gutterBottom>
        Collection Name: {collectionName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        User ID: {userId}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Highest Bid Amount: {highestBid}
      </Typography>
      <TextField
        type="number"
        label="Enter Bid Amount"
        variant="outlined"
        value={bidAmount}
        onChange={handleBidChange}
        fullWidth
        sx={{ marginBottom: '10px' }}
        inputProps={{
          style: { color: 'white', borderColor: isValidBid ? 'green' : 'red' },
        }}
      />
      <TextField
        label="Enter Your Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
        fullWidth
        sx={{ marginBottom: '10px' }}
        inputProps={{
          style: { color: 'white' },
        }}
      />
      <TextField
        label="Enter Your Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        fullWidth
        sx={{ marginBottom: '10px' }}
        inputProps={{
          style: { color: 'white' },
        }}
      />
      <Button variant="contained" color="primary" onClick={handleBidSubmit}>
        Submit Bid
      </Button>

      <List>
        {bids.map((bid, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Bid Amount: ${bid.amount}`}
              secondary={`Time: ${bid.time}`}
            />
            <ListItemText
              primary={`Name: ${bid.name}`}
            />
            <ListItemText
              primary={`Phone Number: ${bid.phoneNumber}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BiddingPage;
