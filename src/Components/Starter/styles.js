import styled from 'styled-components';
import { SmallHeading, QUERIES } from '../../Styling';

export const StarterCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: white;
    border-radius: 0;
    justify-content: center;
    align-items: center;

    @media (${QUERIES.medium}) {
        height: 500px;
        width: 500px;
        border-radius: 1000px;
    }

    img {
        width: 340.3px;
        height: 102.09px;
        margin: 20px 0;
    }

    ${SmallHeading} {
        text-align: center;
    }
`;
