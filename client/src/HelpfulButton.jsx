/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';

const HelpfulButton = (props) => {
  return (
      <Button active={props.active} onClick={(e) => props.clickHandler(e, props.string.toLowerCase())}>{props.string}</Button>
    );
  };

const Button = styled.span`
  border-radius: 2px;
  padding: 4px 6px 4px 6px;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : '#66c0f4' };
  border-color: transparent;
  display: inline;
  background: ${props => props.active ? '#36617c' : '#212c3d' };
  margin-left: 2px;
  margin-right: 2px;

  &:hover {
    background: #66c0f4
    color: white;
  }
`;

export default HelpfulButton;