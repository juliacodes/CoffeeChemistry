import styled from 'styled-components';
import { QUERIES, Paragraph, SmallHeading } from '../../Styling';
export const RecipeFlexCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
`;

export const Right = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding: 0 30px;

    ${Paragraph} {
        max-width: 600px;
    }

    @media (${QUERIES.medium}) {
        padding: 0 50px;
        width: 50%;
    }
`;

export const Left = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    @media (${QUERIES.medium}) {
        width: 50%;
    }
`;

export const MainImage = styled.img`
    width: 40%;
    z-index: 1;
    position: relative;
    max-width: 300px;

    @media (${QUERIES.medium}) {
        width: 60%;
    }
`;

export const RecipeContent = styled.div`
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
    background-color: #f9f8f8;

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
            color: #9291bd;
            position: absolute;
            top: 40px;
            margin-left: 15px;
            @media (${QUERIES.medium}) {
                top: 57px;
            }
        }

        input {
            font-weight: 900;
            font-size: 30px;
            line-height: 117%;
            letter-spacing: 0.2em;
            background-color: transparent;
            border: none;
            margin-top: 5px;
            padding: 35px 10px 5px 15px;
            color: #656499;
            outline: none;
            width: 100%;

            @media (${QUERIES.medium}) {
                padding: 45px 10px 12px 15px;
            }

            ::placeholder {
                color: #656499;
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
            color: #656499;
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
export const Steps = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media (${QUERIES.medium}) {
        width: 50%;
        margin-top: 0;
    }
`;

export const Step = styled.div`
    margin: 10px auto;

    @media (${QUERIES.medium}) {
        margin: 20px auto;
    }

    p {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 15px;
        line-height: 117%;
        letter-spacing: 0.2em;
        color: #9291bd;
        padding: 0;
        margin: 10px auto;
        width: fit-content;
        text-align: center;

        &:nth-child(2) {
            font-size: 20px;
            color: #656499;
            border-bottom: 1px solid #656499;
            text-transform: capitalize;
        }

        &:nth-child(3) {
            text-align: center;
            font-size: 40px;
            letter-spacing: 0.2em;
            text-transform: capitalize;
            color: #656499;
        }
    }
`;

export const Enjoy = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    ${SmallHeading} {
        margin: 0;
    }
`;
