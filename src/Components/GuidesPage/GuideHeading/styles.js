import styled from 'styled-components';
import { Heading, Inner } from '../../../Styling';

export const HeadingCont = styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    background-color: #f8f8f6;

    ${Inner} {
        align-items: unset;
    }

    ${Heading} {
        text-align: left;
        font-size: 45px;
        font-weight: 100;
    }
`;
