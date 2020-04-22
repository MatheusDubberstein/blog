import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Folders, Spotlight, Description } from './styles';
import imageDigital from '~/assets/images/digital/2.PNG';
import imagePaper from '~/assets/images/paper/1.png';

export default function Portifolio() {
  return (
    <Container>
      <Description>
        <strong>Portifólio</strong>
        <div>
          Estas são algumas das minhas obras como ilustrador, sendo que cotem
          tanto estudo para desenhos como desenhos finalizados e logos
        </div>
      </Description>
      <Spotlight>
        <strong>Destaque</strong>
        <img src={imageDigital} alt="Imagem em Destaque" />
      </Spotlight>
      <Folders>
        <Link to="/portifolio/digital">
          <img src={imageDigital} alt="Imagem Digital" />
          <strong>Digital</strong>
        </Link>
        <Link to="/portifolio/paper">
          <img src={imagePaper} alt="Imagem papel" />
          <strong>Papel</strong>
        </Link>
        <Link to="/portifolio/videos">
          <img src={imageDigital} alt="Imagem Digital" />
          <strong>Videos</strong>
        </Link>
      </Folders>
    </Container>
  );
}
