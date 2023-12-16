import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
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

function Login({ onLogin }) {
  const navigate=useNavigate();
  const [usernames, setUsernames] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsernames(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/users');
      const user=response.data.find((user)=>user.username===usernames)
      if(user)
      {
        if(user.password===password)
        navigate("/bookcatalog")

      }

      const token = response.data.token;

      onLogin(token);
    } catch (error) {
      console.error('Authentication failed:', error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <StyledTextField
          label="Username"
          variant="outlined"
          type="text"
          value={usernames}
          onChange={handleUsernameChange}
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
        <StyledButton type="submit">Login</StyledButton>
        <p>Don't Have an Account? </p>
        <Link to="/reg">
          <StyledButton>Register</StyledButton>
        </Link>
      </form>
    </div>
  );
}

export default Login;
