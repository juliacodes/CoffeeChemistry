import styled from 'styled-components/macro';
import wave from '../../Images/wave.png';
import { WaveAnim, WaveAnimRev } from '../../Styling';

export const RecipeListCont = styled.div`
    justify-content: center;
    text-align: center;
    user-select: none;

    a {
        display: flex;
        text-align: center;
        text-decoration: none;
        align-items: center;
        text-transform: uppercase;
        margin: 30px 0;
        -webkit-text-fill-color: black;
        -webkit-text-stroke-color: black;
        -webkit-text-stroke-width: 1px;
        position: relative;

        ::after {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            content: 'Chemex';
            font-size: 70px;
            letter-spacing: 0.1em;
            line-height: 149%;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-color: black;
            -webkit-text-stroke-width: 1px;
            background-image: url(${wave});
            background-repeat: repeat-x;
            background-size: cover;
            background-position-y: 85px;
            animation: ${WaveAnimRev} 2s forwards;
        }

        :hover {
            ::after {
                animation: ${WaveAnim} 2s forwards;
            }
        }
    }

    & .frenchpress {
        :hover::after,
        ::after {
            content: 'french press';
        }
    }

    & .aeropress {
        :hover::after,
        ::after {
            content: 'aeropress';
        }
    }

    & .espresso {
        :hover::after,
        ::after {
            content: 'espresso';
        }
    }

    & .pourover {
        :hover::after,
        ::after {
            content: 'pourover';
        }
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
