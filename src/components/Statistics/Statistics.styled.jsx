import styled from '@emotion/styled';
import { randomColor } from 'units/randomColor';

export const Title = styled.h2`
  padding: ${props => props.theme.spacing(8)};
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.grey};
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing(3)};
  width: calc(100% / 5);
  text-align: center;
  background-color: ${randomColor};
`;

export const StatsLabel = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const StatsValue = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 28px;
`;

export const Section = styled.section`
  width: 480px;
  margin: ${props => props.theme.spacing(3)} auto;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;
