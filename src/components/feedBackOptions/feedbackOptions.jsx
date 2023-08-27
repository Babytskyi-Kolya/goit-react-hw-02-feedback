import React from 'react';
import { Wrap, Button } from '../feedBackOptions/feedbackOptions.Styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrap>
    {options.map(option => (
      <Button  key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </Wrap>
);

export default FeedbackOptions;