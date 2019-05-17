import React from 'react';
import styled from 'styled-components';
import RatingButtons from './RatingButtons.jsx';

const ReviewRating = (props) => (
  <Wrapper>
    <Text>Was this review helpful?</Text>
    <RatingButtons />
    <Feedback>{props.yes} found this review helpful</Feedback>
    <Feedback>{props.funny} found this review funny</Feedback>
  </Wrapper>
);

const Wrapper = styled.div`
  
`;

const Text = styled.div`
  color: #8091a2;
  font-size: 12px;
  line-height: 35px;
  display: inline;  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
`;

const Feedback = styled.div`
  color: #647580;
  font-size: 12px;
  display: block;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export default ReviewRating;