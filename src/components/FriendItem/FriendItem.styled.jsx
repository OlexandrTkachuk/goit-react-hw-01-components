import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
  padding: ${props => props.theme.spacing(3)};
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(3)};
  }
`;

export const Status = styled.span`
  background-color: ${props => (props.status ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
