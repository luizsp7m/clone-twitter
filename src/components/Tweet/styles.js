import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);

  display: grid;
  grid-template-columns: 10fr 90fr;
`;

export const Photo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    color: #0F1419;
    font-size: 16px;
    cursor: pointer;
  }

  > P {
    font-size: 15px;
    color: #0F1419;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  .icon {
    cursor: pointer;
    color: #666;

    &:hover {
      color: var(--primary-color);
    }
  }

  .icon + .icon {
    margin-left: 96px;
  }

`