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
    lightGray: '#757575'
};

export const Heading = styled.h1`
    font-size: 20px;
    color: black;
`;

export const SmallHeading = styled.h2`
    font-size: 13px;
    color: black;
`;

export const Button = styled.button`
    width: 130px;
    height: 46px;
    background: ${COLORS.orange};
    font-size: 13px;
    line-height: 17px;
    border-radius: 18px;
    color: white;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`;
