import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import HeaderDefault from '~/components/HeaderDefault';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <HeaderDefault />
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
