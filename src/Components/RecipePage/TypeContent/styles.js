import styled from 'styled-components';
import { Inner, QUERIES } from '../../../Styling';

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
    height: 500px;
    padding: 50px 30px;

    @media (${QUERIES.medium}) {
        padding: 150px 50px;
    }
`;
