import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 80px;
  background: #32303e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  :after {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    height: 10px;
    width: 100%;
    background: #3e3c4b;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 5px;
    transition: background 0.2s;
    background: #32303e;
    :hover {
      background: #3e3c4b;
    }
    > img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
      border: 3px solid #f9fafd;
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > strong {
        color: #f9fafd;
        font-size: 16px;
      }
      > small {
        color: #cccfd9;
      }
    }
  }
  aside {
    display: flex;
    > a {
      color: #f9fafd;
      margin: 0 10px;
      transition: color 0.2s;
      :hover {
        color: ${darken(0.2, '#f9fafd')};
      }
    }
  }
`;

export const LinkStyled = styled(Link)`
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;
