import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 16px;

  > input {
    background: #EBEEF0;
    border: none;
    width: 100%;
    padding: 14px 24px;
    border-radius: 20px;
    outline: 0;
  }
`;

export const Section = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: #F7F9FA;
  border-radius: 10px;

  > span {
    color: var(--primary-color);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > h3 {
    margin-bottom: 20px;
    color: #0F1419;
    font-size: 19px;
    font-weight: 800;
  }
`

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  > button {
    color: var(--primary-color);
    font-weight: bold;
    padding: 6px 20px;
    border: 1px solid var(--primary-color);
    background: #fff;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    outline: 0;

    &:hover {
      background-color: var(--hover-color);
    }
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      > h5 {
        color: #0F1419;
        cursor: pointer;
        font-size: 15px;
        margin-bottom: -2px;

        &:hover {
          text-decoration: underline;
        }
      }

      > span {
        color: #888;
        font-size: 15px;
        text-transform: lowercase;
      }
    }
  }

  .photo {
    background: url(${ props => props.src });
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      opacity: .95;
    }
  }
`

export const TrendingContainer = styled.div`
  display: grid;
  grid-template-columns: 80fr 20fr;
  cursor: pointer;
  margin-bottom: 16px;

  .image {
    background: url(${props => props.src});
    background-position: center;
    background-size: cover;
    height: 69px;
    width: 69px;
    margin-left: 8px;
    border-radius: 8px;
  }

  > div {
    > span {
      color: #888;
      font-size: 14px;

      > label {
        color: #007fff;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    > h3 {
      font-size: 16px;
      color: #0F1419;
      margin-bottom: 2px;
    }
  }
`