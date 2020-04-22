import styled from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';

export const Container = styled.div`
  background: #3e3c4b;
  header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 0 10px;
    > a {
      color: #f9fafd;
      font-size: 20px;
      opacity: 0.5;
      transition: opacity 0.2s;
      :hover {
        opacity: 1;
      }
    }
    > strong {
      color: #f9fafd;
      font-size: 30px;
    }
  }
  > div {
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 0 10px;
    height: 75vh;
    overflow: scroll;
  }
`;

export const Scroll = styled(PerfectScroll)`
  > div {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    padding: 10px;
    > img {
      /* width: 100%;
      height: 100%; */
      max-width: 300px;
      max-height: 300px;
    }
  }
`;
