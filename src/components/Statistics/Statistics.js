import PropTypes from 'prop-types';
import {
  Card,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({ stats, title }) => {
  return (
    <Card>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id} style={{ backgroundColor: createColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatListItem>
          );
        })}
      </StatList>
    </Card>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
