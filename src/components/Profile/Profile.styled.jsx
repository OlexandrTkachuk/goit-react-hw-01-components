import styled from '@emotion/styled';

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 180px;
  margin-bottom: ${props => props.theme.spacing(5)}; ;
`;

export const UserNickname = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const UserLocation = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const StatsLable = styled.span`
  color: ${props => props.theme.colors.grey};
`;

export const StatsQuantity = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const StatsItems = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${props => props.theme.spacing(8)};
  border: ${props => `1px solid ${props.theme.colors.borderColor}`};
  width: calc(100% / 3);
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

export const DescrWrapper = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing(5)};
`;

export const ProfileWrapper = styled.div`
  width: 400px;
  margin: auto;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;
