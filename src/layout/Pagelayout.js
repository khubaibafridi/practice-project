import React from 'react';

import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const ContentBox = styled.div`
  flex-grow: 1;
  overflow: hidden;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 70px;
  background-color: rgba(19, 20, 22, 1);
`;

function Pagelayout({children}) {
  return (
    <>
    <Header />
    <Sidebar />
    <ContentBox>{children}</ContentBox>
    </>
  )
}

export default Pagelayout
