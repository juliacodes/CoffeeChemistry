import styled from 'styled-components';
import { Logo } from '../NavBar/styles';
import { QUERIES } from '../../Styling';

const FooterCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 200px 0 100px 0;
    padding-left: 30px;

    ${Logo} {
        margin: 30px 0;
    }

    @media (${QUERIES.medium}) {
        padding-left: 50px;
    }
`;

export default FooterCont;
