import React from 'react';

import { Container, Section, PageContainer, TrendingContainer } from './styles';

function Right() {
  return (
    <Container>
      <input type="text" placeholder="Buscar no Twitter" />

      <Section>
        <h3>Talvez você curta</h3>
        <Pages image="https://images.unsplash.com/photo-1514429059824-3c6fa0808fe6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" name="Mountain" username="@Mountain" />
        <Pages image="https://images.unsplash.com/photo-1518374895823-ee01662288c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" name="Snow" username="@Snow" />
        <Pages image="https://images.unsplash.com/photo-1551793679-72caa9bc424f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" name="House" username="@House" />
      </Section>

      <Section>
        <h3>O que está acontecendo</h3>
        <Trending topic="Lorem Ipsum" title="What is Lorem Ipsum?" trending="Typesetting" image="https://images.unsplash.com/photo-1604504399146-5a4b65419f4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80" />
        <Trending topic="Lorem Ipsum" title="Where does it come from?" trending="Typesetting" image="https://images.unsplash.com/photo-1606422699425-f7122890005f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
        <Trending topic="Lorem Ipsum" title="Where can I get some?" trending="Typesetting" image="https://images.unsplash.com/photo-1606775481224-6ca08aaf54ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
      </Section>
    </Container>
  );
}

function Pages({ image, name, username }) {
  return (
    <PageContainer src={image}>
      <div>
        <div className="photo" />
        <div>
          <h5>{name}</h5>
          <span>{username}</span>
        </div>
      </div>

      <button>
        Seguir
      </button>
    </PageContainer>
  );
}

function Trending({ topic, title, trending, image }) {
  return (
    <TrendingContainer src={image}>
      <div>
        <span>{topic}</span>
        <h3>{title}</h3>
        <span>Assuntos do Momento: <label>{trending}</label></span>
      </div>

      <div className="image" />
    </TrendingContainer>
  );
}

export default Right;