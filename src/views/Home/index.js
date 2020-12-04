import React from 'react';
import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

function Home() {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}

export default Home;