import styled from 'styled-components';
import { QUERIES } from '../../Styling';
import { SmallHeading } from '../../Styling';

export const GuidesCont = styled.div`
    background-color: black;
    width: 100%;
    padding: 100px 0 50px 0;

    @media (${QUERIES.medium}) {
        padding: 100px 0;
    }
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    max-width: ${QUERIES.maxWidth};
    margin: 10px 30px;

    @media (${QUERIES.medium}) {
        margin: 30px auto;
    }
`;
export const Column = styled.div`
    width: 50%;

    @media (${QUERIES.medium}) {
        margin: 0 30px;
        width: 25%;
    }
`;

export const SmallHeadingGuides = styled(SmallHeading)`
    color: white;
    margin: 0 30px 50px 30px;

    @media (${QUERIES.medium}) {
        margin: 0 auto 100px auto;
    }
`;

export const SmallerHeadingGuides = styled(SmallHeading)`
    color: white;
`;
