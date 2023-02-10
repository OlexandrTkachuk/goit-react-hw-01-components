import styled from '@emotion/styled';

export const TableHead = styled.th`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;

  width: 220px;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.colors.blue};
`;

export const TableRaw = styled.tr`
  color: ${props => props.theme.colors.white};

  :nth-of-type(2n) {
    background-color: ${props => props.theme.colors.backgroundColor};
  }
`;

export const Table = styled.table`
  margin: ${props => props.theme.spacing(5)} auto 0px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;

export const TableData = styled.td`
  text-align: center;
  width: 220px;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  color: ${props => props.theme.colors.grey};
  text-transform: ${props => props.firstColumn && 'capitalize'};
  text-align: ${props => props.firstColumn && 'left'};
  padding: ${props => props.firstColumn && '10px 0px 10px 94px'};
`;
