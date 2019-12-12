import styled from 'styled-components';
import { SmallHeading, Paragraph, QUERIES } from '../../Styling';
import mountain from '../../Images/Mountain.jpg';
import arabic from '../../Images/arabic.jpg';
import liberica from '../../Images/liberica.jpg';
import robusta from '../../Images/robusta.jpg';

export const ExploreRowCont = styled.div`
    width: 100%;
    margin: 100px 0;

    ${SmallHeading} {
        text-align: center;
        z-index: 3;
        display: block;
        position: relative;
    }
`;

export const TriSplit = styled.div`
    width: 100%;
    height: 330px;
    background-image: url(${mountain});
    background-size: cover;
    background-repeat: no-repeat;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    transform: translateY(-50px);
    z-index: -1;
    position: relative;
    flex-wrap: wrap;

    @media (${QUERIES.medium}) {
        flex-wrap: nowrap;
        padding: 0 100px;
    }
`;
export const Column = styled.div`
    width: 100%;
    transform: translateY(250px);
    margin: 0 40px 30px 40px;
    height: 450px;
    background-color: white;
    box-shadow: 0px 0px 12.9446px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;

    ${SmallHeading} {
        text-align: left;
        padding: 0 20px;
    }

    ${Paragraph} {
        padding: 0 20px 20px 20px;
    }

    @media (${QUERIES.medium}) {
        width: 25%;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 70%;
    background-size: cover;

    &.arabic {
        background-image: url(${arabic});
    }

    &.liberica {
        background-image: url(${liberica});
    }

    &.robusta {
        background-image: url(${robusta});
    }
`;
