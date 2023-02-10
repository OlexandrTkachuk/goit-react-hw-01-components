import PropTypes from 'prop-types';
import {
  Section,
  StatsItem,
  StatsLabel,
  StatsList,
  Title,
  StatsValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <StatsLabel>{label}</StatsLabel>
              <StatsValue>{percentage}%</StatsValue>
            </StatsItem>
          );
        })}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
