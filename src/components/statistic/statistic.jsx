import React from 'react';
import { Item } from '../statistic/statistic.Styled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul>
    <Item><span>Good: {good}</span></Item>
    <Item><span>Neutral: {neutral}</span></Item>
    <Item><span>Span: {bad}</span></Item>
    <Item><span>total: {total}</span> </Item>
    <Item><span>Positive Feedback: {positivePercentage}%</span></Item>
  </ul>
);

export default Statistics;