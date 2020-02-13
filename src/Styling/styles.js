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
    background-color: white;
    height: auto;
    opacity: 1;
    z-index: 3;
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

export const InnerLanding = styled(Inner)`
    padding: 83px 0 100px 0;
    z-index: 5;
    margin-bottom: 670px;

    @media (${QUERIES.medium}) {
        padding: 183px 0 200px 0;
    }
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
    align-items: left;
    text-align: left;
    letter-spacing: 0.1em;

    @media (${QUERIES.medium}) {
        align-items: center;
        text-align: center;
    }
`;

export const Paragraph = styled.p`
    font-size: 10px;
    color: ${COLORS.lightGray};
    line-height: 190%;
    letter-spacing: 0.05em;
    padding-right: 10px;

    @media (${QUERIES.medium}) {
        font-size: 13px;
        padding-right: 30px;
    }
`;

export const Break = styled.span`
    flex-basis: 100%;
`;

export const Spacing = styled.div`
    display: flex;
    margin: 0px auto 0 auto;

    @media (${QUERIES.medium}) {
        margin: 200px auto 0 auto;
    }
`;

export const FixedSpacing = styled(Spacing)`
    width: 100vw;
    position: fixed;
    z-index: -99;
    bottom: 0;
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

export const Fade = keyframes`
  0% {
   opacity: 1;
  }

  90%{
    opacity: 0;
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

export const Loader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 6;
    animation: ${Fade} 1.5s forwards;
`;
