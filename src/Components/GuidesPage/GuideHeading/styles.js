import styled from 'styled-components';
import { Heading, Inner, QUERIES } from '../../../Styling';

export const HeadingCont = styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    background-color: #f8f8f6;

    ${Inner} {
        align-items: unset;
        padding: 130px 20px 0 20px;

        @media (${QUERIES.medium}) {
            padding: 130px 50px 0 50px;
        }
    }

    ${Heading} {
        text-align: left;
        font-size: 45px;
        font-weight: 100;
    }
`;
