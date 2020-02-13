import styled from 'styled-components';
import { QUERIES, COLORS } from '../../../Styling';
import bean from '../../../Images/bean.png';

export const Inputs = styled.div`
    width: 100%;
    padding-right: 0;
    margin-bottom: 30px;

    @media (${QUERIES.medium}) {
        width: 50%;
        padding-right: 20%;
    }

    form {
        width: 100%;
        height: auto;
        margin: 0 auto;
        position: relative;

        label {
            display: none;
        }

        .drag-legend {
            top: 60px;
        }

        legend {
            font-family: 'Lato', sans-serif;
            font-style: italic;
            text-transform: capitalize;
            font-weight: 400;
            font-size: 13px;
            line-height: 117%;
            letter-spacing: 0.2em;
            color: #575757;
        }

        .num-input {
            font-family: 'Michroma', sans-serif;
            font-size: 26px;
            line-height: auto;
            letter-spacing: 0.2em;
            text-transform: capitalize;
            border: none;
            margin: 20px 0 25px 0;
            color: black;
            outline: none;
            width: 100%;
            overflow: visible;

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
            color: black;
            font-size: 15px;
            font-weight: 900;
            text-transform: capitalize;
            line-height: auto;
            letter-spacing: 0.2em;
            margin: 20px 0 25px 0;
        }
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    margin: 20px 0 35px 0;
    input {
        -webkit-appearance: none;
        background-color: transparent;
        outline: none;
        direction: rtl;
    }

    input[type='range']::-webkit-slider-runnable-track {
        width: 80%;
        height: 5px;
        cursor: pointer;
        background: black;
        border-radius: 1px;
    }

    input[type='range']::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 2px solid black;
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
        width: 100%;
        justify-content: space-between;
        color: ${COLORS.darkPurple};

        option {
            display: block;

            &#weak,
            &#med,
            &#strong {
                background-image: url(${bean});
                background-size: cover;
                background-repeat: no-repeat;
                width: 20px;
                height: 20px;
                margin-bottom: 10px;
            }

            &#weak {
                opacity: 0.1;
            }

            &#med {
                opacity: 0.4;
            }
        }

        @media only screen and (min-width: 959px) {
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
