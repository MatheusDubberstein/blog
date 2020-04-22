import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 80px;
  background: #3e3c4b;
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
    background: #cccfd9;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
  header {
    display: flex;
    align-items: center;
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
  @media (max-width: 600px) {
    height: 80px;
    > header {
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
          font-size: 10px;
        }
        > small {
          font-size: 10px;
          color: #cccfd9;
        }
      }
    }

    aside {
      display: flex;
      > a {
        font-size: 10px;
        color: #f9fafd;
        margin: 0 10px;
        transition: color 0.2s;
        :hover {
          color: ${darken(0.2, '#f9fafd')};
        }
      }
    }
  }
`;
