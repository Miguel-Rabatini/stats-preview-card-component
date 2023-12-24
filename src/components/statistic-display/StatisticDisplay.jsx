//React/////
import PropTypes from "prop-types";

//Style/////
import "./StatisticDisplay.scss";

const StatisticDisplay = ({ statistic, statisticName }) => {
  return (
    <article className="statistic-display">
      <h1 className="statistic-display_statistic">{statistic}</h1>

      <p className="statistic-display_statistic-name">{statisticName}</p>
    </article>
  );
};

StatisticDisplay.propTypes = {
  statistic: PropTypes.string.isRequired,
  statisticName: PropTypes.string.isRequired,
};

export default StatisticDisplay;
