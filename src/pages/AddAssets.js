import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Cube from '../assets/icons/3dcube-white.svg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import Refresh from '../assets/icons/refresh.svg'
import Add from '../assets/icons/add-circle.svg'
import Tick from '../assets/icons/tick-circle.svg'


const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 860px;
  height: 400px;
  top: 331px;
  left: 244px;
  gap: 0px;
  border-radius: 12px 0px 0px 0px;
  opacity: 0px;
  background-color: rgba(28, 29, 32, 1);
  border-radius: 10px;
  padding: 20px;
  `;

const HeadText = styled.div`
font-family: Euclid Circular B;
font-size: 24px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(230, 230, 234, 1);
`;

const LeftContent = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height: 354px;
border-radius: 12px;
border: 1px solid rgba(48, 51, 59, 1);
opacity: 0px;
margin-top: 15px;
`;

const MainText = styled.div`
display: flex;
width: 500px;
height: 63px;
border-bottom: 1px solid rgba(48, 51, 59, 1);
box-sizing: border-box;
padding: 20px;
align-items: center;

& span{
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: rgba(230, 230, 234, 1);
margin-left: 10px;
}
`;

const RecipientAddress = styled.div`
font-family: Euclid Circular B;
font-size: 14px;
font-weight: 500;
line-height: 20.3px;
margin-top: 15px;
margin-left: 20px;
color: rgba(255, 255, 255, 1);
`;

const InputContainer = styled.div`
display: flex;
flex-direction: row;
width: 420px;
height: 25px;
top: 108px;
left: 20px;
padding: 16px 12px 16px 12px;
gap: 178px;
border-radius: 6px;
border: 1px solid rgba(48, 51, 59, 1);
margin-left: 20px;
margin-top: 5px;
padding: 20px;
`;

const Input = styled.div`
width: 220px;
height: 20px;
gap: 8px;
color: white;

& span{
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 23.2px;
text-align: left;
color: rgba(110, 120, 130, 1);
}
`;

const AmountText = styled.div`
font-family: Euclid Circular B;
font-size: 14px;
font-weight: 500;
line-height: 20.3px;
text-align: left;
margin-top: 15px;
margin-left: 20px;
`;

const AmountContainer =styled.div`
display: flex;
flex-direction: row;
position: relative;
width: 460px;
height: 63px;
padding: 16px;
gap: 12px;
border-radius: 6px;
border: 1px solid rgba(48, 51, 59, 1);
margin-left: 20px;
margin-top: 5px;
padding: 20px;
box-sizing: border-box;
`;

const MaxButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
position: absolute;
left: 60%;
bottom: 10px;
width: 61px;
height: 40px;
padding: 10px;
gap: 10px;
border-radius: 8px;
background-color: rgba(19, 20, 22, 1);
cursor: pointer;

& span{
  font-family: Euclid Circular B;
font-size: 14px;
font-weight: 400;
line-height: 20.3px;
text-align: left;

}
`;

const UsdtButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
position: absolute;
left: 78%;
bottom: 10px;
width: 90px;
height: 40px;
padding: 10px;
gap: 10px;
border-radius: 8px;
background-color: rgba(19, 20, 22, 1);
cursor: pointer;

& span{
font-family: Euclid Circular B;
font-size: 14px;
font-weight: 400;
line-height: 20.3px;
text-align: center;

}
`;

const Button = styled.div`
display: flex;
justify-content: center;
width: 100px;
height: 25px;
padding: 13px;
gap: 10px;
border-radius: 10px;
background-color: rgba(15, 35, 33, 1);
margin-top: 15px;
margin-left: 355px;
cursor: pointer;

& span{
  font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: rgba(46, 248, 224, 1);
}
`;

const RightContent = styled.div`
display: flex;
flex-direction: column;
width: 320px;
height: 354px;
border-radius: 12px;
border: 1px solid rgba(48, 51, 59, 1);
background-color: rgba(28, 29, 32, 1);
margin-top: 39px;
margin-left: 30px;
`;

const MainTextRight = styled.div`
display: flex;
width: 320px;
height: 63px;
border-bottom: 1px solid rgba(48, 51, 59, 1);
box-sizing: border-box;
padding: 20px;
align-items: center;

& span{
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: rgba(230, 230, 234, 1);
margin-left: 10px;
}
`;


const CreateConfirmSegment = styled.div`
display: flex;
flex-direction: column; 
`;

const CreateSegment =styled.div`
display: flex;
flex-direction: row;
margin-top: 25px;
margin-left: 20px;

& span{
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: rgba(230, 230, 234, 1);
margin-left: 10px;
}
`;

const Line = styled.div`
width: 100px;
height: 35px;
border-left: 1px solid rgba(48, 51, 59, 1);
margin-top: 5px;
margin-left: 32px;
`;

const ConfirmSegment = styled.div`
display: flex;
flex-direction: row;
margin-top: 5px;
margin-left: 20px;

& span{
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: rgba(230, 230, 234, 1);
margin-left: 10px;
}
`;

const AddAssets = ({open, handleClose}) => {
  
  const [inputValue, setInputValue] = useState('');

  return (
    <>
    {
        open && (    <Modal>
 


      <ModalContent>
        <div>
        <div>
          <HeadText>
            New transaction
          </HeadText>
        </div>  
        <div>
          <LeftContent>
            <MainText>
              <img src={Cube} alt='3d cube' />
              <span>Send Tokens</span>
            </MainText>
            <div style={{display: 'flex', flexDirection:'column'}}>
              <RecipientAddress>Recipient address</RecipientAddress>
              <InputContainer>
              <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <img style={{cursor: 'pointer', width:'20px',height:'20px'}} src={ArrowDown} alt='arrow down' />
              </InputContainer>
            </div>
            <div>
              <AmountText>Amount</AmountText>
              <AmountContainer>
              <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}><span>0</span></Input>
              <MaxButton><span>Max</span></MaxButton>
              <UsdtButton>
                <span>USDT</span>
                <img style={{cursor: 'pointer', width:'20px',height:'20px'}} src={ArrowDown} alt='arrow down' />
              </UsdtButton>
              </AmountContainer>
            </div>
            <Button onClick={handleClose}><span>Confirm</span></Button>
          </LeftContent>
        </div>
        </div>
        <div>
          <RightContent>
            <MainTextRight>
              <img src={Refresh} alt='refresh icon' />
              <span>Transaction Status</span>
            </MainTextRight>
            <CreateConfirmSegment>
              <CreateSegment>
                <img src={Add} alt='add circle' />
                <span>Create</span>
              </CreateSegment>
              <Line />
              <ConfirmSegment>
                <img src={Tick} alt='tick icon' />
                <span>Confirmed (0 of 1)</span>
              </ConfirmSegment>
            </CreateConfirmSegment>
          </RightContent>
        </div>
      </ModalContent>
      
      
      
              
          </Modal>)
    }
    </>
  )
}

export default AddAssets
