import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  margin: 'auto',
  marginTop: '50px', 
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
});

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '0.5rem',
  marginTop: '1rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-out',
  '&:hover': {
    backgroundColor: '#555',
  },
});

function Registration() {
  const [username, setUsername] = useState('');
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCreateAccountSubmit = async(e) => {
    e.preventDefault();
    console.log('Create account submitted');
    await axios.post('http://localhost:3000/users',{"username": username,
    "password":password});
    navigate('/');
  };

  return (
    <StyledContainer>
      <form className="registration-form" onSubmit={handleCreateAccountSubmit}>
        <h1>Create Account</h1>
        <StyledTextField
          label="Username"
          variant="outlined"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <StyledTextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
          <StyledButton type="submit">Create Account</StyledButton>
      </form>
    </StyledContainer>
  );
}

export default Registration;
