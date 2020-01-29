import styled from 'styled-components';
import { Inner, Paragraph } from '../../../Styling';
export const GuideFooterCont = styled.div`
    background-color: #f8f8f6;
    width: 100%;
    padding: 100px 0 50px 0;

    ${Inner} {
        padding-top: 0;
        align-items: center;
        padding-right: 50px;
        flex-direction: row;
        justify-content: flex-end;
    }

    ${Paragraph} {
        color: black;
        padding: 0 20px 0 0;
        margin: 0;
        display: inline-block;
    }
`;
