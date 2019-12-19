import styled from 'styled-components';
import { QUERIES, COLORS } from '../../Styling';

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
        color: ${COLORS.lightPurple};
        padding: 0;
        margin: 10px auto;
        width: fit-content;
        text-align: center;

        &:nth-child(2) {
            font-size: 20px;
            color: ${COLORS.darkPurple};
            border-bottom: 1px solid ${COLORS.darkPurple};
            text-transform: capitalize;
        }

        &:nth-child(3) {
            text-align: center;
            font-size: 40px;
            letter-spacing: 0.2em;
            text-transform: capitalize;
            color: ${COLORS.darkPurple};
        }
    }
`;
