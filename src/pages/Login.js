import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Logo from '../assets/icons/logo.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
`;

export const Card = styled.div`
  background: #1e1e1e;
  border-radius: 10px;
  margin-top: 20px;
  padding: 40px;
  padding-left: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-size: 22px;
  color: white;
`;

export const Description = styled.p`
  color: #bbbbbb;
  margin-bottom: 30px;
  margin-left: 5px;
`;

export const ConnectedWalletInfo = styled.div`
  margin-bottom: 20px;
  color: #bbbbbb;
  text-align: left; 
  border: 0.5px solid;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border-color: rgba(48, 51, 59, 1);

  p {
    margin: 0;
    font-size: medium;
    color: white;
  }

  span {
    color: #00ffcc;
    font-size: small;
  }
`;

export const InputWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

export const InputLabel = styled.label`
  display: block;
  color: #bbbbbb;
`;

export const Input = styled.input`
  background: #1e1e1e;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 0.5px solid;
  border-color: rgba(48, 51, 59, 1);
  width: 100%;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: rgba(15, 35, 33, 1);
  border: none;
  margin-top: 20px;
  margin-left: 10px;
  padding: 16px;
  width: 100%;
  border-radius: 5px;
  color: rgba(46, 248, 224, 1);
  cursor: pointer;
  font-size: 16px;

  &:hover{
  transform: scale(1.05);
}
`;


function Login() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
  
    const handleSignIn = () => {
      if (password === '12345') {
        setAuthenticated(true);
      } else {
        alert('Incorrect password');
      }
    };
  
    useEffect(() => {
      if (authenticated) {
        window.localStorage.setItem("token", "key")
        navigate('/dashboard');
      }
    }, [authenticated, navigate]);
  
  return (
<Container>
    <img src={Logo} width={'200px'}  alt='logo'/>
    <Card>
        <Title>Sign In</Title>
        <Description>Use your password to sign in to your BrokerSwap account.</Description>
        <ConnectedWalletInfo>
        <p>Wallet connected:</p>
        <span>0x741e5Fc2662B8FA68172A34c4e5a170De829A1d1</span>
        </ConnectedWalletInfo>
        <InputWrapper>
        <InputLabel>Password</InputLabel>
        <Input type="password"             value={password}
        onChange={(e) => setPassword(e.target.value)} />
        </InputWrapper>
        <Button onClick={handleSignIn}>Sign in</Button>
    </Card>   
</Container>
  )
}

export default Login
