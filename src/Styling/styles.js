import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`
};

export const COLORS = {
    lightOrange: '#FBDAC9',
    orange: '#E05E33',
    grayBackground: '#FAFAFA',
    deepNavy: '#292E58',
    lightGray: '#757575',
    brown: '#602B1C'
};
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.lightOrange};
`;
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 2000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    font-size: 20px;
    color: black;
`;

export const SmallHeading = styled.h2`
    font-size: 13px;
    color: black;
    font-weight: 300;
`;

export const Button = styled.button`
    outline: none;
    width: 120px;
    padding: 8px;
    background: ${COLORS.orange};
    font-size: 13px;
    line-height: 17px;
    border-radius: 20px;
    color: white;
    border: 3px solid ${COLORS.lightOrange};
    margin-top: 20px;
    cursor: pointer;
    transition-duration: 0.3s;

    :hover {
        background-color: ${COLORS.brown};
    }
`;
