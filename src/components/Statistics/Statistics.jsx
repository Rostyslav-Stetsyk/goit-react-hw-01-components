import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Percentage,
  SectionStatistics,
  StatList,
  Title,
} from './Statistics.styled';

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {{ title } && <Title>{title}</Title>}
      <StatList>
        {stats.map((el, _, arr) => {
          return (
            <Item
              backgroundColor={randomColor()}
              quantity={arr.length}
              key={el.id}
            >
              <Label>{el.label}</Label>
              <Percentage>{el.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};