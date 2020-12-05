import React from 'react';

import { Container, Photo, Post } from './styles';

import { BiMessageSquareDetail, BiShareAlt } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineCloudUpload } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';

function Tweet() {
  return (
    <Container>
      <Photo src="https://images.wallpaperscraft.com/image/forest_trees_sunlight_191877_1280x720.jpg" />
      <Post>
        <h3>Luiz Antonio</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <div>
          <BiMessageSquareDetail className="icon" size={20} />
          <BiShareAlt className="icon" size={20} />
          <AiOutlineHeart className="icon" size={20} />
          <AiOutlineCloudUpload className="icon" size={20} />
          <BsGraphUp className="icon" size={20} />
        </div>
      </Post>
    </Container>
  );
}

export default Tweet;