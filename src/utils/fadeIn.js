// FadeIn.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = ({ duration = 300, delay = 0, children, ...delegated }) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
export default FadeIn;

FadeIn.propTypes = {
  duration: PropTypes.number,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};
