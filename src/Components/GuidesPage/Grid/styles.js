import styled from 'styled-components';
import { QUERIES } from '../../../Styling';
import Pourover from '../../../Images/Guides/pourover.jpg';

export const GridContainer = styled.div`
    height: 100%;
    width: 100%;
    margin-bottom: 50px;
    padding: 0 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    grid-template-rows: repeat(2, 1fr);

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

export const Column = styled.div``;

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

export const RightDoubleColumn = styled.div`
    grid-area: 2 / 3 / span 2 / span 3;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 210%;
    letter-spacing: 0.05em;
    color: #000000;
`;

export const TextColumn = styled(RightDoubleColumn)`
    grid-area: 4 / 3 / 4 / 4;
    font-size: 12px;
    color: #767676;
`;

export const ImageColumn = styled.div`
    grid-area: 5 / 1 / 6 / 4;
    height: 400px;
    background-position: center center;
    background-size: cover;
    background-image: url(${Pourover});
`;
