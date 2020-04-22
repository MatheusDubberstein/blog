import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 25px;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    > header {
      > img {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: 10px solid #f9fafd;
      }
      > div {
        display: flex;
        flex-direction: column;
        > strong {
          font-size: 40px;
          color: #e2e4eb;
        }
        > small {
          font-size: 20px;
          color: #cccfd9;
        }
      }
    }
    > aside {
      display: flex;
      flex-direction: column;
      > a {
        margin: 5px 0;
        display: flex;
        align-items: flex-end;
        > img {
          height: 25px;
          width: 25px;
          margin: 0 5px 0 0;
        }
        > small {
          font-size: 14px;
          color: #e2e4eb;
          transition: color 0.2s;
          :hover {
            color: ${darken(0.2, '#E2E4EB')};
          }
        }
      }
    }
  }
  > footer {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 60% 40%;
    > header {
      border-right: 2px solid #858691;
      display: flex;
      flex-direction: column;
      > strong {
        font-size: 40px;
        color: #e2e4eb;
      }
      > small {
        font-size: 20px;
        color: #cccfd9;
      }
    }
    > aside {
      display: flex;
      flex-direction: column;
      > strong {
        font-size: 40px;
        color: #e2e4eb;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 10px;
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      > header {
        > img {
          height: 150px;
          width: 150px;
          border-radius: 50%;
          border: 5px solid #f9fafd;
        }
        > div {
          display: flex;
          flex-direction: column;
          > strong {
            font-size: 15px;
            color: #e2e4eb;
          }
          > small {
            font-size: 10px;
            color: #cccfd9;
          }
        }
      }
      > aside {
        display: flex;
        flex-direction: column;
        > a {
          margin: 5px 0;
          display: flex;
          align-items: flex-end;
          > img {
            height: 15px;
            width: 15px;
            margin: 0 5px 0 0;
          }
          > small {
            font-size: 14px;
            color: #e2e4eb;
            transition: color 0.2s;
            :hover {
              color: ${darken(0.2, '#E2E4EB')};
            }
          }
        }
      }
    }
    > footer {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 50% 50%;
      > header {
        border-right: 2px solid #858691;
        display: flex;
        flex-direction: column;
        > strong {
          font-size: 15px;
          color: #e2e4eb;
        }
        > small {
          font-size: 10px;
          color: #cccfd9;
        }
      }
      > aside {
        display: flex;
        flex-direction: column;
        > strong {
          font-size: 20px;
          color: #e2e4eb;
        }
      }
    }
  }
`;

export const Img = styled.a`
  margin: 0 10px;
  @media (max-width: 600px) {
    margin: 0 2.5px;
  }

  > img {
    height: 100px;
    width: ${(props) => (props.isMongo ? '320px' : '100px')};
    @media (max-width: 600px) {
      height: 25px;
      width: ${(props) => (props.isMongo ? '77px' : '25px')};
    }
  }
`;
