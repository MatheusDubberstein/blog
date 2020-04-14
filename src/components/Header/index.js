import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import profile from '~/assets/Profile.jpeg';

export default function Header() {
  return (
    <Container>
      <header>
        <img src={profile} alt="Matheus Dubberstein da Silva" />
        <div>
          <strong>Matheus Dubberstein da Silva</strong>
          <small>Desenvolvedor Web</small>
        </div>
      </header>
      <aside>
        <Link to="/projects">PROJETOS</Link>
        <Link to="/profile">SOBRE</Link>
      </aside>
    </Container>
  );
}
