import styled from 'styled-components';
import { Inner, QUERIES, Container } from '../../../Styling';

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
`;
