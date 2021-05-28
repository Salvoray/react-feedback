const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <ul>
    {Object.keys(options).map((option) => (
      <li key={option}>
        <button type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOption;
