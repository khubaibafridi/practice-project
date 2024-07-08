import React from 'react'

import styled from 'styled-components'

export const HeadText = styled.div`
font-family: Euclid Circular B;
font-size: 24px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(230, 230, 234, 1);
`;

export const Container = styled.div`
width: 1050px;
height: 500px;
border-radius: 12px;
background-color: rgba(28, 29, 32, 1);
box-sizing: border-box;
margin-top: 15px;
`;

export const Thead = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
border-bottom: 1px solid rgba(48, 51, 59, 1);
padding: 15px;
`;

export const Th = styled.div`
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(110, 120, 130, 1);
margin-right: 18%;
`;

export const Tbody = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
`;

export const Tr = styled.div`
display: flex;
flex-direction: row;
border-bottom: 0.8px solid rgba(48, 51, 59, 1);
`;

export const Td = styled.div`
font-family: Euclid Circular B;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: rgba(230, 230, 234, 1);
margin-bottom: 10px;
margin-top: 12px;
margin-right: 15%;
`;

function Transactions() {
  return (
    <>
        <div style={{height: '520px'}}>
            <HeadText>Transaction History</HeadText>
                <Container>
                    <div>
                    <Thead>
                        <Th>Receiver wallet</Th>
                        <Th>Caller wallet</Th>
                        <Th>Amount</Th>
                        <Th>Token</Th>
                    </Thead>
                    </div>
                    <div>
                        <Tbody>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>123</Td>
                                <Td>USDT</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>325</Td>
                                <Td>USDC</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>123</Td>
                                <Td>USDT</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>755</Td>
                                <Td>USDT</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>145</Td>
                                <Td>USDC</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>145</Td>
                                <Td>USDC</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>145</Td>
                                <Td>USDC</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>145</Td>
                                <Td>USDC</Td>
                            </Tr>
                            <Tr>
                                <Td>0x38C818CA8B9251b3931...</Td>
                                <Td>0xbd726efb5c51a6f2bd4...</Td>
                                <Td>145</Td>
                                <Td>USDC</Td>
                            </Tr>
                        </Tbody>
                    </div>
                </Container>

        </div>
    </>
  )
}

export default Transactions
