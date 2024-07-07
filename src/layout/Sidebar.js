import React from 'react'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import Image from '../assets/images/image.png'
import Copy from '../assets/icons/copy.svg'
import Export from '../assets/icons/export.svg'
import Home from '../assets/icons/home-2-grey.svg'
import Cube from '../assets/icons/3dcube.svg'
import UpDown from '../assets/icons/arrow-3.svg'

const Container = styled.div`
  width: 260px;
  border-right: 1px solid rgba(48, 51, 59, 1);
  background: rgba(28, 29, 32, 1);
  color: white;
  min-height: 100vh;
  position: fixed;
  margin-top: 70px;
  top: 0;
  bottom: 0;
`;

const Informations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 142px;
  flex-shrink: 0;
  flex-direction: column;
  border-bottom: 1px solid rgba(48, 51, 59, 1);
`;

const UserName = styled.div`
  color: rgba(230, 230, 234, 1);
  font-family: Euclid Circular B;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: 0.2px;
`;

const UserToken = styled.div`
  color: rgba(182, 185, 193, 1);
  font-family: Euclid Circular B;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.2px;
`;

export const UserDollar = styled.div`
font-family: Euclid Circular B;
font-size: 12px;
font-weight: 600;
line-height: 20px;
text-align: left;
color: rgba(255, 255, 255, 1);
`;

const CopyExport = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: left;
  gap: 14px;
  margin-right: 130px;
  cursor: pointer;
`;

const ItemMenu = styled.div`
  padding: 20px;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  cursor: pointer;
  display: flex;
  padding: 10px 68px 10px 10px;
  align-items: center;
  gap: 12px;
  border-radius: 8px;

  &:hover{
    background-color: rgba(255, 255, 255, 0.1);
  }

  & span {
    color: rgba(255, 255, 255, 1);
    font-family: Euclid Circular B;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.2px;
  }
`;

function Sidebar() {
  const navigate = useNavigate();

  const ToAssets = () => {
    navigate('/assets');
  };

  const ToDashboard = () => {
    navigate('/dashboard');
  };

  const ToTransactions = () => {
    navigate('/transactions');
  };
  return (
    <Container>
        <Informations>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <img src={Image} alt="imag" />
          </div>
          <div style={{marginLeft: '20px'}}>
            <UserName>Wallet address</UserName>
            <UserToken>0x741esdf5Fc...2269A1d</UserToken>
            <UserDollar>0.00 USD</UserDollar>
          </div>
        </div>
        <CopyExport>
          <img
            src={Copy}
            alt="copy"
          />
          <img
            src={Export}
            alt="export"
          />
        </CopyExport>
        </Informations>
        <ItemMenu>
        <Menu onClick={ToDashboard}>
          <img src={Home} alt='dashboard' />
          <span>Dashboard</span>
        </Menu>

        <Menu onClick={ToAssets}>
          <img src={Cube} alt='assets' />
          <span>Assets</span>
        </Menu>

        <Menu onClick={ToTransactions}>
          <img src={UpDown} alt='transactions' />
          <span>Transactions</span>
        </Menu>
      </ItemMenu>
    </Container>
  )
}

export default Sidebar
