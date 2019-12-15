import styled from 'styled-components';
import { QUERIES, Paragraph } from '../../Styling';
export const RecipeFlexCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Right = styled.div`
    width: 50%;
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
    }
`;

export const Left = styled.div`
    width: 50%;
    height: auto;
    text-align: center;
`;

export const MainImage = styled.img`
    width: 60%;
    z-index: 1;
    position: relative;
    max-width: 300px;
`;

export const RecipeContent = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    transform: translateY(-100px);
    position: relative;
    z-index: 0;
`;

export const Inputs = styled.div`
    padding: 100px 0 100px 0;
    width: 50%;
    background-color: #f9f8f8;

    form {
        padding: 20px 50px;
        width: 500px;
        height: auto;
        margin: 0 auto;
        position: relative;
        legend {
            text-transform: uppercase;
            font-weight: 900;
            font-size: 15px;
            line-height: 117%;
            letter-spacing: 0.2em;
            color: #9291bd;
            position: absolute;
            top: 57px;
            margin-left: 15px;
        }

        input {
            font-weight: 900;
            font-size: 30px;
            line-height: 117%;
            /* identical to box height, or 35px */
            letter-spacing: 0.2em;
            background-color: transparent;
            border: none;
            margin-top: 5px;
            padding: 45px 10px 12px 15px;
            color: #656499;
            outline: none;

            ::placeholder {
                color: #656499;
            }

            :hover,
            :focus {
                background-color: white;
            }
        }
    }
`;
export const Steps = styled.div`
    width: 50%;
`;
