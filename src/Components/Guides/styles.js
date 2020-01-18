import styled from 'styled-components';
import { QUERIES } from '../../Styling';

export const GuidesCont = styled.div`
    background-color: black;
    width: 100%;
    padding: 200px 0;
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    max-width: ${QUERIES.maxWidth};
    margin: 30px auto;
`;
export const Column = styled.div`
    width: 25%;
    margin: 0 30px;
`;
