import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import Header from '~/components/Header';

export default function HomeLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Header />
        {children}
      </Content>
    </Wrapper>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
