import styled from 'styled-components';
import { QUERIES } from '../../Styling';

export const NavBarCont = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 auto;
    z-index: 5;
    transition-duration: 0.3s;

    @media (${QUERIES.medium}) {
        position: fixed;
    }
`;

export const Inner = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    max-width: ${QUERIES.maxWidth};
    margin: 0 auto;
    padding: 20px 30px;

    @media (${QUERIES.medium}) {
        padding: 20px 50px;
        justify-content: space-between;
    }

    .Logo {
        margin: 10px 0;
        border-bottom: none;
        display: block;

        @media (${QUERIES.medium}) {
            margin: 20px auto;
        }

        :hover {
            border-bottom: none;
            transform: scale(0.8);
        }
    }

    a {
        text-align: center;
        text-transform: capitalize;
        text-decoration: none;
        font-size: 15px;
        line-height: 149%;
        color: black;
        margin: 20px;
        transition-duration: 0.3s;
        border-bottom: 1px solid transparent;
        padding: 0;
        margin-left: 0;
        padding-bottom: 2px;
        display: none;
        height: 30px;

        @media (${QUERIES.medium}) {
            display: unset;
        }

        :hover {
            border-bottom: 1px solid black;
        }
    }
`;

export const Logo = styled.img`
    width: 95.03px;
    height: 95px;
`;
