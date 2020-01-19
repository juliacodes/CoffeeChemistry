import styled, { keyframes } from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const COLORS = {
    lightGray: '#9E9E9E',
    lightBlue: '#E7F0FE',
    darkBlue: '#3A3578',
    lightPink: '#FAF1EF',
    darkPink: '#E98383',
    lightPurple: '#9291bd',
    darkPurple: '#656499',
    gray: '#f9f8f8'
};

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    max-width: ${QUERIES.maxWidth};
    width: 100vw;
    height: auto;
    margin: 0 auto;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    font-family: Michroma;
    font-size: 30px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
`;

export const SmallHeading = styled.h2`
    font-family: Michroma;
    font-size: 18px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
`;

export const Paragraph = styled.p`
    font-size: 13px;
    color: ${COLORS.lightGray};
    font-size: 13px;
    line-height: 117%;
    letter-spacing: 0.14em;
    text-transform: lowercase;
`;

export const Break = styled.span`
    flex-basis: 100%;
`;

export const Spacing = styled.div`
    display: flex;
    margin: 200px auto 0 auto;
`;

export const WaveAnim = keyframes`
  0% {
    background-position-y: 85px;
    background-position-x: 0;
  }

  100% {
    background-position-y: 0px;
    background-position-x: -200px;

  }
`;

export const WaveAnimRev = keyframes`
  0% {
    background-position-y: 0px;
    background-position-x: -200px;
  }

  100% {
    background-position-y: 85px;
    background-position-x: 0;
  }
`;
