import React from 'react';

import { Container, Menu, Logo, Profile, Image } from './styles';

import { FaTwitter, FaHome, FaHashtag, FaRegBell, FaRegFlag, FaList, FaUserAlt, FaEllipsisH, FaEnvelope } from 'react-icons/fa';

function Sidebar() {
  return (
    <Container>
      <Menu>
        <FaTwitter color="#1A91DA" size={28} className="logo" />

        <div>
          <FaHome color="#222" size={24} />
          <label>Página Inicial</label>
        </div>

        <div>
          <FaHashtag color="#222" size={24} />
          <label>Explorar</label>
        </div>

        <div>
          <FaRegBell color="#222" size={24} />
          <label>Notificações</label>
        </div>

        <div>
          <FaEnvelope color="#222" size={24} />
          <label>Mensagens</label>
        </div>

        <div>
          <FaRegFlag color="#222" size={24} />
          <label>Itens salvos</label>
        </div>

        <div>
          <FaList color="#222" size={24} />
          <label>Listas</label>
        </div>

        <div>
          <FaUserAlt color="#222" size={24} />
          <label>Perfil</label>
        </div>

        <div>
          <FaEllipsisH color="#222" size={24} />
          <label>Mais</label>
        </div>

        <button>
          Tweetar
        </button>
      </Menu>

      <Profile>
        <Image src="https://images.wallpaperscraft.com/image/forest_trees_sunlight_191877_1280x720.jpg">
          <div className="image" />

          <div>
            <h5>Luiz Antonio</h5>
            <span>@_Luizs_</span>
          </div>
        </Image>

        <FaEllipsisH color="#111" size={16} />
      </Profile>
    </Container>
  );
}

export default Sidebar;