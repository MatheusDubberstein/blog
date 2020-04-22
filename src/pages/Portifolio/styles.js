import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 250px;
  grid-template-areas: 'description spotlight' 'folders spotlight';
  grid-gap: 10px;
  height: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 400px 250px;
    grid-template-areas: 'description' 'spotlight' 'folders';
  }
`;

export const Folders = styled.div`
  grid-area: folders;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  > a {
    height: 150px;
    width: 150px;
    background: #e2e4eb;
    border-radius: 10px;
    border: 3px solid #32303e;
    opacity: 0.5;
    transition: opacity 0.2s;

    :hover {
      opacity: 1;
    }
    > img {
      height: 100px;
      width: 100%;
      border-radius: 10px;
    }
    > strong {
      height: 50px;
      color: #32303e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }
`;

export const Spotlight = styled.div`
  grid-area: spotlight;
  /* height: 100%;
  width: 100%; */
  display: flex;
  /* grid-template-rows: 50px 1fr; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  > strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    color: #f9fafd;
    font-size: 25px;
  }
  > img {
    height: 90%;
    width: 100%;
    border-radius: 10px;
    border: 3px solid #32303e;
  }
`;

export const Description = styled.div`
  grid-area: description;
  > strong {
    color: #f9fafd;
    font-size: 30px;
  }
  > div {
    color: #f9fafd;
    opacity: 0.5;
    font-size: 15px;
  }
`;

export const Text = styled.div``;
