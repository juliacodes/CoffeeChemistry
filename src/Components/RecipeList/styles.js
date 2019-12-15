import styled from 'styled-components/macro';
import { QUERIES, Heading } from '../../Styling';
import chemex from '../../Images/chemex.png';
import french from '../../Images/french.png';
import espres from '../../Images/espres.png';
import pourov from '../../Images/pourov.png';

export const RecipeListCont = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Heading} {
        text-align: center;
        margin-bottom: 50px;
    }

    @media (${QUERIES.medium}) {
        margin-top: 50px;
    }

    a {
        border: none;
        text-decoration: none;
    }
`;

export const Option = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 900;
    color: #ededed;
    font-size: 20px;
    height: 300px;
    line-height: 117%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    margin: 50px 0;
    position: relative;
    transition-duration: 0.3s;
    overflow: visible;
    width: 100vw;

    @media (${QUERIES.medium}) {
        margin-top: 100px;
        font-size: 185.376px;
        height: unset;
    }

    ::after {
        content: '';
        position: absolute;
        top: 0px;
        left: calc(50% - (250px / 2));
        width: 220px;
        height: 372px;
        background-image: url(${chemex});
        background-size: cover;
        transition: transform 0.3s;

        @media (${QUERIES.medium}) {
            top: -50px;
        }
    }

    &.french {
        ::after {
            background-image: url(${french});
        }
    }

    &.espresso {
        ::after {
            background-image: url(${espres});
            left: calc(50% - (280px / 2));
            top: -30px;
            width: 252px;
            height: 316px;
        }
    }

    &.pourover {
        ::after {
            background-image: url(${pourov});
            left: calc(50% - (320px / 2));
            top: 5px;
            width: 252px;
            height: 196px;
        }
    }
    :hover {
        color: #bcbcbc;
        ::after {
            transform: scale(1.1) rotate(10deg);
        }
    }
`;
