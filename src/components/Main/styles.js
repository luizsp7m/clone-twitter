import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 32px;
  border-bottom: 1px solid var(--border-color);

  .icon {
    margin-right: 32px;
    color: var(--primary-color);
    cursor: pointer;
  }

  > div {
    > h3 {
      font-size: 18px;
      font-weight: 800;
      color: #0F1419;
    }

    > span {
      font-size: 14px;
      color: var(--gray-color);
    }
  }
`;

export const Profile = styled.div`
  height: 375px;
`

export const Background = styled.div`
  height: 50%;
  background-color: var(--primary-color);
`

export const Image = styled.div`
  position: relative;
  background: red;
  /* height: 50px; */

  > div.photo {
    background: url(${props => props.src});
    background-position: center;
    background-size: cover;
    border: 4px solid #fff;
    height: 134px;
    width: 134px;
    border-radius: 50%;
    cursor: pointer;

    position: absolute;
    top: -64px;
    left: 16px;
  }

  > button {
    padding: 8px 16px;
    background: #fff;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    font-weight: bold;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
    outline: 0;

    &:hover {
      background: var(--hover-color);
    }

    position: absolute;
    top: 16px;
    right: 16px;
  }
`

export const Details = styled.div`
  padding: 0 24px;
  margin-top: 72px;

  > h3 {
    color: #0F1419;
  }

  > span {
    color: #888;
    font-size: 16px;
    margin: 0;
  }

  > div.calendar {
    margin-top: 10px;

    > span {
      color: #888;
      margin-left: 8px;
    }
  }

  > div.amount {
    margin-top: 10px;

    > span {
      color: #888;
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      > b {
        color: #0F1419;
      }
    }
  }
`

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  border-bottom: 1px solid var(--border-color);

  > span {
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #888;
    font-weight: bold;
    padding: 16px 0;
    cursor: pointer;
    border-bottom: 2px solid #fff;

    &:hover {
      background: var(--hover-color);
      border-bottom: 2px solid var(--hover-color);
      color: var(--primary-color);
    }
  }

  .activated {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);

    &:hover {
      border-bottom: 2px solid var(--primary-color);
    }
  }
`