import styled from 'styled-components';
import { QUERIES, Paragraph, SmallHeading } from '../../../Styling';
export const RecipeFlexCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
`;

export const Right = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding: 0 30px;

    ${Paragraph} {
        max-width: 600px;
    }

    @media (${QUERIES.medium}) {
        padding: 0 50px;
        width: 50%;
    }
`;

export const Left = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    @media (${QUERIES.medium}) {
        width: 50%;
    }
`;

export const MainImage = styled.img`
    width: 40%;
    z-index: 1;
    position: relative;
    max-width: 300px;

    @media (${QUERIES.medium}) {
        width: 60%;
    }
`;

export const Enjoy = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    ${SmallHeading} {
        margin: 0;
    }
`;
