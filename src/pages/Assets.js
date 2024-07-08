import {React, useState} from 'react'

import styled from 'styled-components'
import AddAssets from './AddAssets';

export const HeadText = styled.div`
font-family: Euclid Circular B;
font-size: 24px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(230, 230, 234, 1);
`;

export const AssetsCard = styled.div`
width: 1050px;
height: 168px;
border-radius: 12px;
background-color: rgba(28, 29, 32, 1);
margin-top: 20px;
padding: 15px;
box-sizing: border-box;
`;

export const THead = styled.div`
display: flex;
flex-direction: row;
border-bottom: 1px solid rgba(48, 51, 59, 1);
`;

export const HeadItem = styled.div`
height: 24px;
font-family: Euclid Circular B;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(182, 185, 193, 1);
margin-right: 40%;
margin-bottom: 10px;
`;

export const TBody = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom: 1px solid rgba(48, 51, 59, 1);
`;

export const BodyItem = styled.div`
height: 24px;
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
margin-top: 25px;
color: rgba(230, 230, 234, 1);

`;

export const Button = styled.div`
display: flex;
justify-content: center;
width: 115px;
height: 44px;
border-radius: 8px;
background-color: rgba(15, 35, 33, 1);
color:  rgba(46, 248, 224, 1);
margin-top: 9px;
margin-bottom: 5px;
cursor: pointer;

& p{
display: flex;
justify-content: center;
align-items: center;
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
}
`;

function Assets() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ height: '511px' }}>
        <HeadText>Assets</HeadText>
        <AssetsCard>
          <THead>
            <HeadItem>Token</HeadItem>
            <HeadItem>Balance</HeadItem>
          </THead>
          <TBody>
            <BodyItem>USDT</BodyItem>
            <BodyItem>50 USDT</BodyItem>
            <div>
              <Button onClick={() => setOpen(true)}><p>Pull</p></Button>
            </div>
          </TBody>
          <TBody>
            <BodyItem>USDC</BodyItem>
            <BodyItem>50 USDC</BodyItem>
            <div>
              <Button onClick={() => setOpen(true)}><p>Pull</p></Button>
            </div>
          </TBody>
        </AssetsCard>
      </div>

      <AddAssets open={open} handleClose={() => { setOpen(false); }} />
    </>
  );
}

export default Assets
