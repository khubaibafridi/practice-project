import React from 'react'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Logo from '../assets/icons/logo.svg';
import Lock from '../assets/icons/lock.svg';


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
  padding: 30px;
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
`;

export const Button = styled.button`
  background: rgba(15, 35, 33, 1);
  border: none;
  margin-top: 20px;
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

function ConnectWallet() {
    const navigate = useNavigate();

    const handleConnectWallet = () => {
      navigate('/login');
    };
  return (
    <Container>
        <img src={Logo} width={'200px'} alt='logo'/>
        <Card>
          <Title>Connect your wallet</Title>
          <Description>Connect a wallet to view your BrokerSwap account.</Description>
            <img src={Lock} width={'75px'} height={'75px'} alt="Wallet Icon" />
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        </Card>    
    </Container>
  )
}

export default ConnectWallet
