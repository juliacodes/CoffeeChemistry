import styled from 'styled-components';
import { QUERIES, COLORS, Heading, Paragraph, Button } from '../../Styling';
import Landing from '../../Images/Landing.jpg';

export const FlexRowCont = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.direction || 'row'};

    @media (${QUERIES.medium}) {
        flex-wrap: nowrap;
    }
`;

export const Left = styled.div`
    width: 100%;
    padding: 100px 30px;
    background-color: ${props =>
        props.backgroundColor || `${COLORS.lightBlue}`};
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${Heading} {
        max-width: 500px;
        color: ${props => props.color || `${COLORS.darkBlue}`};
    }

    ${Paragraph} {
        max-width: 450px;
        color: ${props => props.color || `${COLORS.darkBlue}`};
    }

    ${Button} {
        color: ${props => props.color || `${COLORS.darkBlue}`};
        border-color: ${props => props.color || `${COLORS.darkBlue}`};

        :hover {
            color: white;
        }

        :hover:after {
            background-color: ${props => props.color || `${COLORS.darkBlue}`};
        }
    }

    @media (${QUERIES.medium}) {
        width: 50%;
        padding: 220px 50px;
    }
`;

export const Right = styled.div`
    width: 100%;
    height: 300px;

    @media (${QUERIES.medium}) {
        width: 50%;
        height: unset;
    }
`;

export const FlexImage = styled.div`
    background-image: url(${props => props.image || `${Landing}`});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
`;
