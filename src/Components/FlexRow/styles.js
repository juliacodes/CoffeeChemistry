import styled from 'styled-components';
import { QUERIES, COLORS, Heading, Paragraph } from '../../Styling';
import Landing from '../../Images/Landing.jpg';
export const FlexRowCont = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (${QUERIES.medium}) {
        flex-wrap: nowrap;
    }
`;

export const Left = styled.div`
    width: 100%;
    padding: 100px 30px;
    background-color: ${COLORS.lightBlue};
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${Heading} {
        max-width: 500px;
    }

    ${Paragraph} {
        max-width: 450px;
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
    background-image: url(${Landing});
    height: 100%;
    width: 100%;
    background-size: cover;
`;
