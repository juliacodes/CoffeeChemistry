import styled from 'styled-components';
import { QUERIES, COLORS } from '../../Styling';

export const RecipeCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    transform: translateY(-100px);
    position: relative;
    z-index: 0;
    flex-wrap: wrap;
`;

export const Inputs = styled.div`
    padding: 80px 0 50px 0;
    width: 100%;
    background-color: ${COLORS.gray};

    @media (${QUERIES.medium}) {
        width: 50%;
        padding: 100px 0 100px 0;
    }

    form {
        padding: 5px 30px;
        width: 100%;
        height: auto;
        margin: 0 auto;
        position: relative;

        .drag-legend {
            top: 60px;
        }

        @media (${QUERIES.medium}) {
            width: 500px;
            padding: 10px 50px;
        }
        legend {
            text-transform: uppercase;
            font-weight: 900;
            font-size: 15px;
            line-height: 117%;
            letter-spacing: 0.2em;
            color: ${COLORS.lightPurple};
            position: absolute;
            top: 40px;
            margin-left: 15px;
            @media (${QUERIES.medium}) {
                top: 57px;
            }
        }

        .num-input {
            font-weight: 900;
            font-size: 30px;
            line-height: 117%;
            letter-spacing: 0.2em;
            background-color: transparent;
            border: none;
            margin-top: 5px;
            padding: 35px 10px 5px 15px;
            color: ${COLORS.darkPurple};
            outline: none;
            width: 100%;

            @media (${QUERIES.medium}) {
                padding: 45px 10px 12px 15px;
            }

            ::placeholder {
                color: ${COLORS.darkPurple};
            }

            :hover,
            :focus {
                background-color: white;
            }
        }

        .disabled {
            :hover {
                background-color: transparent;
            }
        }

        p {
            padding: 25px 10px 12px 15px;
            color: ${COLORS.darkBlue};
            font-size: 15px;
            font-weight: 900;
            text-transform: capitalize;
            line-height: 117%;
            letter-spacing: 0.2em;

            @media (${QUERIES.medium}) {
                padding: 45px 10px 12px 15px;
            }
        }
    }
`;

export const InputWrapper = styled.div`
    padding: 45px 15px 0 15px;
    width: 100%;
    input {
        -webkit-appearance: none;
        background-color: transparent;
        outline: none;
    }

    input[type='range']::-webkit-slider-runnable-track {
        width: 80%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: ${COLORS.lightPurple};
        border-radius: 1px;
    }

    input[type='range']::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 2px solid ${COLORS.darkPurple};
        height: 20px;
        width: 20px;
        border-radius: 25px;
        background: white;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }

    #ticks {
        display: flex;
        width: 85%;
        justify-content: space-between;
        color: ${COLORS.darkPurple};

        option {
            display: block;
            padding-bottom: 10px;
            font-weight: 400;
            @media only screen and (min-width: 959px) {
                width: unset;
            }
        }

        @media only screen and (min-width: 959px) {
            justify-content: space-between;
            width: 100%;
            option:nth-child(2n + 2) {
                display: block;
            }
        }
    }

    .dragger {
        position: relative;
        width: 100%;
        margin-bottom: 10px;
    }

    :hover {
        background-color: white;
    }
`;
