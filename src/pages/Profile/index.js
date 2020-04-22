import React from 'react';

import { Container, Img } from './styles';
import angular from '~/assets/images/tech/angularjs.svg';
import css from '~/assets/images/tech/css.svg';
import html from '~/assets/images/tech/html.svg';
import javascript from '~/assets/images/tech/js.svg';
import mongo from '~/assets/images/tech/mongo.svg';
import nodejs from '~/assets/images/tech/nodejs.svg';
import postgres from '~/assets/images/tech/postgres.svg';
import reactRedux from '~/assets/images/tech/react-redux.svg';
import react from '~/assets/images/tech/react.svg';
import vue from '~/assets/images/tech/vue.svg';
import profile from '~/assets/Profile.jpeg';
import instagram from '~/assets/images/social/instagram.svg';
import linkedin from '~/assets/images/social/linkedin.svg';
import github from '~/assets/images/social/github.svg';

export default function Login() {
  return (
    <Container>
      <div>
        <header>
          <img src={profile} alt="Matheus Dubberstein da Silva" />
          <div>
            <strong>Matheus Dubberstein da Silva</strong>
            <small>desenvolvedor web / Designer</small>
          </div>
        </header>
        <aside>
          <a href="https://www.github.com/matheusDubberstein" target="_blank">
            <img src={github} alt="github.com/matheusDubberstein" />
            <small>Matheus Dubberstein</small>
          </a>
          <a
            href="https://www.instagram.com/matheus_dubberstein/"
            target="_blank"
          >
            <img src={instagram} alt="instagram/matheus_dubberstein" />
            <small>@matheus_dubberstein</small>
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-dubberstein-39a9bb154/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="https://www.linkedin.com/in/matheus-dubberstein-39a9bb154/"
            />
            <small>Matheus Dubberstein</small>
          </a>
        </aside>
      </div>
      <footer>
        <header>
          <strong>Sobre</strong>
          <small>
            Trabalho no setor de desenvolvimento de software desde 2016, já pude
            experimentar diversas tecnologias como Java, C, PostgreSQL, MongoDB,
            Javascript junto com seus Framework(React, React Native, ReactJS,
            NodeJS, AngularJS, VueJS). Passar por essas experiencias foram muito
            boas pra ter um rumo determinado, hoje sou desenvolvedor Full Stack
            usando (ReactJS, React Native, NodeJs, PostgreSQL) sendo que tenho
            mais carinho com a parte do Front-end, tenho experiencia com
            controle de versões usando Git.
          </small>
        </header>
        <aside>
          <strong>Tecnologias</strong>
          <div>
            <Img>
              <img src={html} alt="HTML5" />
            </Img>
            <Img>
              <img src={css} alt="CSS5" />
            </Img>
            <Img>
              <img src={postgres} alt="PostgresSQL" />
            </Img>
            <Img isMongo>
              <img src={mongo} alt="MongoDB" />
            </Img>
          </div>
          <div>
            <Img>
              <img src={javascript} alt="Javascript" />
            </Img>
            <Img>
              <img src={nodejs} alt="NodeJS" />
            </Img>
            <Img>
              <img src={vue} alt="VueJS" />
            </Img>
            <Img>
              <img src={angular} alt="AngularJS" />
            </Img>
            <Img>
              <img src={react} alt="ReactJs" />
            </Img>
            <Img>
              <img src={reactRedux} alt="React Redux" />
            </Img>
          </div>
        </aside>
      </footer>
    </Container>
  );
}
