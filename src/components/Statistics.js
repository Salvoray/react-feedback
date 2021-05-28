import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total ? (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive Feedback:{positivePercentage}%</li>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );

export default Statistics;
