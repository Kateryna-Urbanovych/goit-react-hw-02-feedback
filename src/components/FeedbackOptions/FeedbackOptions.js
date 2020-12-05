import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return options.map(option => (
        <button
            key={'btn-' + option}
            className={s.button}
            onClick={onLeaveFeedback}
        >
            {option}
        </button>
    ));
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
