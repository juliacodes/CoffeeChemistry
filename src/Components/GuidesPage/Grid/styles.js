import styled, { keyframes } from 'styled-components';
import { QUERIES } from '../../../Styling';
import Pourover from '../../../Images/Guides/pourover.jpg';
import CoffeeOrigins from '../../../Images/Guides/coffeeorigins.jpg';
import TriCoffee from '../../../Images/Guides/TriCoffee.jpg';
import Espresso from '../../../Images/Guides/espresso.jpg';
import Mug from '../../../Images/Guides/mug.jpg';

export const GridContainer = styled.div`
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    column-gap: 20px;
    grid-row-gap: 100px;

    @media (${QUERIES.medium}) {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 0 50px;
    }
    .BoldPara {
        grid-area: 2 / 1 / 2 / 5;

        @media (${QUERIES.medium}) {
            grid-area: 2 / 3 / 2 / 5;
        }
    }

    .RegularPara {
        grid-area: 3 / 1 / 3 / 3;

        @media (${QUERIES.medium}) {
            grid-area: 3 / 3 / 3 / 4;
        }
    }

    .RegularPara2 {
        grid-area: 3 / 3 / 3 / 5;

        @media (${QUERIES.medium}) {
            grid-area: 3 / 4 / 3 / 4;
        }
    }

    a {
        text-decoration: none;
        transition-duration: 2.2s;

        :hover {
            text-decoration: underline;
        }
    }

    div {
        align-self: center;
        position: relative;
    }

    span {
        margin-left: 40px;
        position: absolute;
        top: 0;
        font-weight: 100;
        line-height: 120%;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
    }
`;

export const downArrowBounce = keyframes`
  0% {
    transform: translateY(0);
  }

  50%{
    transform: translateY(-4px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const Column = styled.div`
    & .downArrow {
        animation: ${downArrowBounce} 1.5s infinite;
    }
`;

export const Caption = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: normal;
    font-size: 13px;
    line-height: 175.5%;
    max-width: 170px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #666666;
`;

export const Heading = styled.p`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-top: 0px;
    line-height: 210%;
    letter-spacing: 0.05em;
    color: #000000;
`;

export const Text = styled(Heading)`
    font-size: 12px;
    color: #767676;
`;

export const ImageLink = styled.div`
    align-self: top;

    ${Heading} {
        margin-top: 20px;
    }
    > .triImage {
        background-image: url(${TriCoffee});
        height: 500px;
    }

    > .espresso {
        background-image: url(${Espresso});
    }

    > .mug {
        background-image: url(${Mug});
    }
`;

export const Image = styled.div`
    background-image: url(${CoffeeOrigins});
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const RightDoubleColumn = styled.div`
    grid-area: 2 / 1 / 2 / 5;
`;
export const TextColumn = styled(RightDoubleColumn)`
    grid-area: 3 / 3 / 3 / 4;
`;

export const ImageColumn = styled.div`
    grid-area: 4 / 1 / 4 / 4;
    height: 400px;
    background-position: center center;
    background-size: cover;
    background-image: url(${Pourover});
`;
