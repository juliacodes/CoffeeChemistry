import styled from 'styled-components/macro';
import { QUERIES, Heading } from '../../Styling';
import wave from '../../Images/wave.png';
export const RecipeListCont = styled.div`
    justify-content: center;
    text-align: center;

    a {
        display: flex;
        text-align: center;
        text-decoration: none;
        color: black;
        align-items: center;
        text-transform: uppercase;
        margin: 30px 0;
    }
`;

export const Option = styled.div`
    font-size: 70px;
    width: 100%;
    line-height: 149%;
    align-items: center;
    text-align: center;
    position: relative;
    letter-spacing: 0.1em;
`;
