import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Image from '../assets/images/image.png';
import Copy from '../assets/icons/copy-grey.svg';
import Export from '../assets/icons/export-grey.svg'
import ArrowUpDown from '../assets/icons/arrow-2.svg'
import ArrowRight from '../assets/icons/arrow-right.svg'

export const HeadText = styled.div`
font-family: Euclid Circular B;
font-size: 24px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(230, 230, 234, 1);
`;

const OverviewCard = styled.div`
display: flex;
flex-direction: column;
border-radius: 12px;
background: rgba(28, 29, 32, 1);
padding: 20px 25px 30px 20px;
margin-top: 20px;
width: 600px;
height: 200px;
`;

const ConnectedAddress = styled.div`
  color: rgba(230, 230, 234, 1);
  font-family: Euclid Circular B;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.2px;
  padding-top: 24px;
`;

const Id = styled.div`
  color: rgba(230, 230, 234, 1);
  font-family: Euclid Circular B;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.2px;
  display: flex;
  gap: 10px;
`;

export const TokenInfo = styled.div`
display: flex;
flex-direction: row;
padding-top: 40px;
`;

export const Token = styled.div`
display: flex;
flex-direction: column;
`;

export const TokenLabel = styled.text`
font-size: medium;
color: rgba(110, 120, 130, 1);
margin-right: 150px;
cursor: pointer;
`;

export const TokenAamount = styled.text`
font-size: larger;
color: white;
`;

export const Button = styled.div`
width: Hug (124px)px;
height: Hug (50px)px;
padding: 13px 18px 13px 18px;
gap: 10px;
border-radius: 8px 0px 0px 0px;
background: rgba(15, 35, 33, 1);
color: rgba(46, 248, 224, 1);
border-radius: 5px;
margin-left: 100px;
cursor: pointer;
`;

export const TransactionCard = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 0px 15px 15px 15px;
width: 380px;
height: 250px;
margin-top: 20px;
border-radius: 12px;
background: rgba(28, 29, 32, 1);
`;

export const TransactionContent = styled.div`
display: flex;
justify-content: space-between;
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: white;
padding-bottom: 10px;
margin-top: 22px;
border-bottom: 1px solid rgba(48, 51, 59, 1);
`;

export const HistoryCard = styled.div`
display: flex;
flex-direction: column;
width: 1045px;
height: 428px;
top: 549px;
border-radius: 12px;
opacity: 0px;
background-color: rgba(28, 29, 32, 1);
margin-top: 15px;
padding: 20px;
box-sizing: border-box;
`;

export const TableHeader = styled.div`
display: flex;
justify-content: center;
margin-right: 140px;
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(117, 120, 123, 1);
height: 24px;
margin-bottom: 20px;
`;

export const TableRow = styled.div`
display: flex;
flex-direction: row;
margin-top: 40px;
border-bottom: 0.8px solid rgba(36, 38, 42, 1);
`;

export const TableCell = styled.div`
display: flex;
margin-right: 90px;
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(230, 230, 234, 1);
height: 24px;
`;

function Dashboard() {
  const navigate = useNavigate();

  const ToAssets = () => {
    navigate('/assets');
  };

  return (
    <>
      <div style={{display:'flex',flexDirection:'row', gap: '20px'}}>
      <div>
      <HeadText>Overview</HeadText>
      <OverviewCard>
      <img style={{height:'50px', width:'50px'}}src={Image}  alt='imag'/>
      <ConnectedAddress>Connected address:</ConnectedAddress>
      <Id>0x741e5Fc2662B8FA68172A34c4e5a170De829A1d1
        <img style={{cursor:'pointer', marginLeft:'5px'}} src={Copy} alt='copy icon'/>
        <img style={{cursor:'pointer'}} src={Export} alt='export icon'/>
      </Id>
      <TokenInfo>
          <Token>
            <TokenLabel>USDT</TokenLabel>
            <TokenAamount>0</TokenAamount>
          </Token>
          <Token>
            <TokenLabel>USDC</TokenLabel>
            <TokenAamount>0</TokenAamount>
          </Token>
          <Button onClick={ToAssets}>View assets</Button>
        </TokenInfo>
      </OverviewCard>
      </div>
      <div>
      <HeadText>Previous transactions</HeadText>
      <TransactionCard>
      <div>
      <TransactionContent>
        <img style={{cursor:'pointer'}} src={ArrowUpDown} alt='arrow up down' />
        123 USDT/USDC
        <img style={{cursor:'pointer'}} src={ArrowRight} alt='arrow right' />
      </TransactionContent>
      </div>
      <div>
      <TransactionContent>
        <img style={{cursor:'pointer'}} src={ArrowUpDown} alt='arrow up down' />
        123 USDT/USDC
        <img style={{cursor:'pointer'}} src={ArrowRight} alt='arrow right' />
      </TransactionContent>
      </div>
      <div>
      <TransactionContent>
        <img style={{cursor:'pointer'}} src={ArrowUpDown} alt='arrow up down' />
        123 USDT/USDC
        <img style={{cursor:'pointer'}} src={ArrowRight} alt='arrow right' />
      </TransactionContent>
      </div>
      <div>
      <TransactionContent>
        <img style={{cursor:'pointer'}} src={ArrowUpDown} alt='arrow up down' />
        123 USDT/USDC
        <img style={{cursor:'pointer'}} src={ArrowRight} alt='arrow right' />
      </TransactionContent>
      </div>
      </TransactionCard>
      </div>
      </div>
      <div>
        <HeadText style={{marginTop:'20px'}}>History</HeadText>
        <HistoryCard>
        <thead>
        <tr style={{display:'flex', flexDirection:'row', borderBottom:'1px solid rgba(48, 51, 59, 1)'}}>
          <TableHeader>Receiver address</TableHeader>
          <TableHeader>WAIT token amount</TableHeader>
          <TableHeader>Message</TableHeader>
          <TableHeader>Transaction hash</TableHeader>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>0x38C818CAB89251b3931...</TableCell>
          <TableCell>1700 WAIT</TableCell>
          <TableCell>USDT sent by Omer</TableCell>
          <TableCell>0xbd726efb5c5d1af62bd48043e7...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>0x38C818CAB89251b3931...</TableCell>
          <TableCell>2770 WAIT</TableCell>
          <TableCell>USDT sent by Omer</TableCell>
          <TableCell>0xbd726efb5c5d1af62bd48043e7...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>0x38C818CAB89251b3931...</TableCell>
          <TableCell>1200 WAIT</TableCell>
          <TableCell>USDT sent by Omer</TableCell>
          <TableCell>0xbd726efb5c5d1af62bd48043e7...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>0x38C818CAB89251b3931...</TableCell>
          <TableCell>1501 WAIT</TableCell>
          <TableCell>USDT sent by Omer</TableCell>
          <TableCell>0xbd726efb5c5d1af62bd48043e7...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>0x38C818CAB89251b3931...</TableCell>
          <TableCell>1370 WAIT</TableCell>
          <TableCell>USDT sent by Omer</TableCell>
          <TableCell>0xbd726efb5c5d1af62bd48043e7...</TableCell>
        </TableRow>
      </tbody>
        </HistoryCard>
      </div>
    </>
  )
}

export default Dashboard
