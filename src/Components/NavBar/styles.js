import styled from 'styled-components';
import { QUERIES, COLORS } from '../../Styling';

export const NavBarCont = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    background-color: white;
    margin: 0 auto;
    position: fixed;
    z-index: 99;
    transition-duration: 0.3s;
`;

export const Inner = styled.div`
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 10px 30px;
    align-items: center;
    max-width: ${QUERIES.maxWidth};
    display: flex;

    @media (${QUERIES.medium}) {
        padding: 20px 50px;
    }
`;

export const Logo = styled.img`
    width: 117px;
    height: 43.13px;
`;

export const NavLinks = styled.div`
    display: none;
    a {
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.24em;
        color: ${COLORS.darkBlue};
        margin: 20px;
        transition-duration: 0.3s;
        border-bottom: 1px solid transparent;
        padding: 0;
        padding-bottom: 2px;

        :hover {
            border-bottom: 1px solid ${COLORS.darkBlue};
        }
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;
