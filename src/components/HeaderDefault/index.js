import React from 'react';

import { Container, LinkStyled } from './styles';
import profile from '~/assets/Profile.jpeg';
import history from '~/services/history';

export default function Header() {
  const { pathname } = history.location;
  return (
    <Container>
      <button type="button" onClick={() => history.push('/')}>
        <img src={profile} alt="Matheus Dubberstein da Silva" />
        <div>
          <strong>Matheus Dubberstein da Silva</strong>
          <small>Desenvolvedor Web</small>
        </div>
      </button>
      <aside>
        <LinkStyled to="/projects" active={pathname === '/projects'}>
          PROJETOS
        </LinkStyled>
        <LinkStyled to="/portifolio" active={pathname === '/portifolio'}>
          PORTIFÓLIO
        </LinkStyled>
        <LinkStyled to="/profile" active={pathname === '/profile'}>
          SOBRE
        </LinkStyled>
      </aside>
    </Container>
  );
}
