import styled from 'styled-components';
import { QUERIES } from '../../Styling';

export const NavBarCont = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: fixed;
    z-index: 99;
    transition-duration: 0.3s;
`;

export const Inner = styled.div`
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    align-items: center;
    max-width: ${QUERIES.maxWidth};
    display: flex;

    @media (${QUERIES.medium}) {
        padding: 20px 50px;
    }

    .Logo {
        margin-left: auto;
        margin-right: auto;
        border-bottom: none;
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

        :hover {
            border-bottom: 1px solid black;
        }
    }
`;

export const Logo = styled.img`
    width: 95.03px;
    height: 95px;
`;
