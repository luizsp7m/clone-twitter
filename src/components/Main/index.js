import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { Container, Row, Profile, Background, Image, Details, Navbar } from './styles';

function Main() {
  return (
    <Container>
      <Row>
        <FiArrowLeft size={24} className="icon" />
        <div>
          <h3>Luiz Antonio</h3>
          <span>25 Tweets</span>
        </div>
      </Row>

      <Profile>
        <Background />
        <Image src="https://images.wallpaperscraft.com/image/forest_trees_sunlight_191877_1280x720.jpg">
          <div className="photo" />
          <button>Editar perfil</button>
        </Image>
        <Details>
          <h3>Luiz Antonio</h3>
          <span>@_Luizs_</span>

          <div className="calendar">
            <FaRegCalendarAlt color="#888" />
            <span>Ingressou em julho de 2014</span>
          </div>

          <div className="amount">
            <span><b>34</b> Seguindo</span>
            <span><b>15</b> Seguidores</span>
          </div>
        </Details>
      </Profile>

      <Navbar>
        <span className="activated">Tweets</span>
        <span>Tweets e respostas</span>
        <span>Mídia</span>
        <span>Curtidas</span>
      </Navbar>
    </Container>
  );
}

export default Main;