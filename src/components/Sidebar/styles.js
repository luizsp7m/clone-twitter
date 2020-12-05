import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Logo = styled.div`

`

export const Menu = styled.div`
  margin-bottom: 16px;

  .logo {
    margin-left: 16px;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
      
    }
  }

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 16px;
    margin-bottom: 2px;
    border-radius: 20px;
    width: 95%;
    color: #0F1419;

    &:hover {
      background: var(--hover-color);
      color: var(--primary-color);
    }

    > label {
      margin-left: 18px;
      font-size: 17px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  > button {
    border: none;
    background: var(--primary-color);
    color: #fff;
    width: 90%;
    padding: 16px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 15px;
    margin-top: 16px;
    outline: none;
    cursor: pointer;
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 20px;

  &:hover {
    background: var(--hover-color);
  }
`

export const Image = styled.div`
  display: flex;
  align-items: center;

  > div.image {
    background: url(${props => props.src});
    height: 45px;
    width: 45px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-right: 12px;
  }

  > div {
    > h5 {
      font-size: 15px;
    }

    > span {
      color: #333;
    }
  }
`