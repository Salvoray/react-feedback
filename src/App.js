import { Component } from "react";
import FeedbackOption from "./components/FeedbackOption";
import Statistics from "./components/Statistics";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementFeedback = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedbackPercentage = () =>
    this.state.good !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={this.state}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
