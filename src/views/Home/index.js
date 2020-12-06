import React from 'react';
import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import Right from '../../components/Right';

function Home() {
  return (
    <Container>
      <Sidebar />
      <Main />
      <Right />
    </Container>
  );
}

export default Home;