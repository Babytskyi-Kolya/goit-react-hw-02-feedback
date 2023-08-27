import React from 'react';
import  Statistics  from '../statistic/statistic';
import Section from '../section/section'
import FeedbackOptions from '../feedBackOptions/feedbackOptions';
import Notification from '../notification/notification';
import { Card } from './feedback.Styled';


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


      handleFeedback = (feedbackType) => {
        this.setState((prevState) => ({
          [feedbackType]: prevState[feedbackType] + 1,
        }));
      };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = ()=>{
        const { good } = this.state;
        const allFeedback = this.countTotalFeedback();
        return allFeedback === 0 ? 0 : Math.round((good / allFeedback) * 100);
    }

   render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
        <Card>
        <Section  title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>

          {total === 0 ? (<Notification message="There is no feedback" />
          ) : (
          <Section>
           <Statistics
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={total} 
            positivePercentage={positiveFeedback}  
            />
      </Section>)}

        </Card>
    )
   }
}

export default Feedback;