import styled from 'styled-components';
import { QUERIES, COLORS } from '../../Styling';

export const NavBarCont = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    max-width: ${QUERIES.maxWidth};
    margin: 0 auto;

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
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.24em;
        color: ${COLORS.darkBlue};
        margin: 20px;
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;
