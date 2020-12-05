import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return total === 0 ? (
        <Notification message="No feedback given" />
    ) : (
        <ul className={s.statisticsList}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
