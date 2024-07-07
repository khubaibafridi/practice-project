import React from 'react'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import Logo from '../assets/icons/logo.svg';
import notification from '../assets/icons/notification.svg'
import arrowLeft from '../assets/icons/arrow-left.svg'
import metamaskicon from '../assets/icons/metamask-icon 1.svg'
import arrowDownWhite from '../assets/icons/arrowDownWhite.svg'

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 70px;
  gap: 20px;
  border-bottom: 1px solid rgba(48, 51, 59, 1);
  background: rgba(28, 29, 32, 1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const NavbarLogo = styled.div`
  padding-top: 20px;
  padding-left: 40px;
  align-items: center;
  height: 70px;
  width: 220px;
  border-right: 1px solid rgba(48, 51, 59, 1);
  `;

const BackButton = styled.div`
  color: lightgray;
  font-family: Euclid Circular B;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  gap: 10px;
  display: flex;
  align-items: center;

  & div {
    display: flex;
    padding: 6px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: rgba(36, 38, 42, 1);
    cursor: pointer;
  }
`;

const NotificationIcon = styled.div`
position: absolute;
margin-top: 25px;
margin-left: 79%;
cursor: pointer;

&:hover{
    transform: scale(1.1);
}
`;

const UserInfo = styled.div`
  display: flex;
  position: absolute;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 220px;
  height: 50px;
  margin-top: 7px;
  left: 82%;
  background: rgba(36, 38, 42, 1);
  cursor: pointer;
`;

const MetaMaskIcon = styled.div`
margin-top: 8px;
margin-right: 7px;
`;

export const Text = styled.div`
display: flex;
flex-direction: column;
color: white;
margin-bottom: 15px;

& p{
    font-size: medium;
    line-height: 0%;
}
span{
    font-size: small;
    line-height: 5px;
    color: rgba(110, 120, 130, 1);
}
`;

export const ArrowDownIcon = styled.div`
&:hover{
    transform: scale(1.2);
}
`;



function Header() {
  const navigate = useNavigate();

  const ToDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <Container>
    <NavbarLogo>
    <img src={Logo} alt="logo" />
  </NavbarLogo>
        <BackButton>
          {window.location.pathname.includes('/transactions') && (
            <>
              <div onClick={ToDashboard}>
                <img src={arrowLeft} alt="ArrowLeft" />
              </div>
              <span>Back</span>
            </>
          )}
        </BackButton>
          <NotificationIcon>
            <img src={notification} alt="notification" />
          </NotificationIcon>
          <UserInfo>
            <MetaMaskIcon>
            <img src={metamaskicon} alt='meta mask icon'/>
            </MetaMaskIcon>
            <Text>
                <p>Metamask @ Goerli</p>
                <span>gor:0x818FE...6032e38c477</span>
            </Text>
            <ArrowDownIcon>
            <img src={arrowDownWhite} alt='arrow down white' />
            </ArrowDownIcon>
          </UserInfo>

    </Container>
  )
}

export default Header
