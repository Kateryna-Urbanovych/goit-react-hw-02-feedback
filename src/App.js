import { Component } from 'react';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    getOptions = () => {
        const keys = Object.keys(this.state);
        return keys.map(
            key => `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`,
        );
    };

    handleChange = ({ target }) => {
        const feedbackOption = target.textContent.toLowerCase();
        this.setState({ [feedbackOption]: this.state[feedbackOption] + 1 });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalCount = this.countTotalFeedback();
        return Math.round((good / totalCount) * 100);
    };

    render() {
        const options = this.getOptions();

        return (
            <div>
                <h2>Please leave feedback</h2>
                {options.map(option => (
                    <button key={'btn-' + option} onClick={this.handleChange}>
                        {option}
                    </button>
                ))}

                <h2>Statictics</h2>
                {this.countTotalFeedback() === 0 ? (
                    <p>No feedback given</p>
                ) : (
                    <ul>
                        {options.map(option => (
                            <li key={option}>
                                {option}: {this.state[option.toLowerCase()]}
                            </li>
                        ))}
                        <li key="Total">Total: {this.countTotalFeedback()}</li>
                        <li key="Positive">
                            Positive feedback:{' '}
                            {this.countPositiveFeedbackPercentage()}%
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}

export default App;
