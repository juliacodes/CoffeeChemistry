import styled, { keyframes } from 'styled-components';
import { Inner, Paragraph } from '../../../Styling';

export const RightArrowBounce = keyframes`
  0% {
    transform: translatex(0);
  }

  50%{
    transform: translatex(4px);
  }

  100% {
    transform: translatex(0);
  }
`;

export const GuideFooterCont = styled.div`
    background-color: #f8f8f6;
    width: 100%;
    padding: 100px 0 50px 0;

    ::after {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100%;
        content: '';
        background-color: black;
        z-index: 0;
        display: block;
        transition: left 1.2s ease-in-out;
    }

    .color {
        transition-duration: 1.2s;
    }

    :hover {
        ::after {
            left: 0;
        }

        ${Paragraph} {
            color: white;
        }

        .color {
            fill: white;
        }
    }

    ${Inner} {
        position: relative;
        z-index: 9;
        padding-top: 0;
        align-items: center;
        padding-right: 50px;
        flex-direction: row;
        justify-content: flex-end;
    }

    ${Paragraph} {
        color: black;
        padding: 0 20px 0 0;
        margin: 0;
        display: inline-block;
        transition-duration: 1.2s;
    }

    & .RightArrow {
        animation: ${RightArrowBounce} 1.5s ease-in-out infinite;
    }
`;
