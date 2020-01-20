import styled from 'styled-components';
import { Inner, QUERIES, Container, Paragraph } from '../../../Styling';

export const ContainerMin = styled(Container)`
    height: auto;
    margin: 200px 0;
`;

export const RecipeFlexCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
`;

export const InnerPadding = styled(Inner)`
    justify-content: unset;
    align-items: unset;
    padding: 0px 20px;

    @media (${QUERIES.medium}) {
        padding: 0px 50px;
    }

    ${Paragraph} {
        margin: 40px 0;
        span {
            font-family: 'Lato', sans-serif;
            font-style: italic;
            font-size: 12px;
            line-height: 117%;
            letter-spacing: 0.2em;
            margin: 0 5px;
            padding: 5px 10px;
            background-color: #f0f0f0;
        }
    }
`;
