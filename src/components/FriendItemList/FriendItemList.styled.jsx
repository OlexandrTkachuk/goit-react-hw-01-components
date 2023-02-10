import styled from '@emotion/styled';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: ${props => props.theme.spacing(3)};
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
  margin: auto;
`;
