import styled from 'styled-components';
import { COLORS } from '../../Styling';

const FormCont = styled.form`
    background-color: #cccccc;
    width: 260px;
    border-radius: 3px;

    input[type='email'] {
        background-color: #cccccc;
        border: none;
        color: white;
        padding: 10px 10px;
        font-size: 13px;
        width: 200px;
        border-radius: 3px 0 0 3px;
        outline: none;

        ::placeholder {
            color: white;
            font-size: 13px;
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        background-color: #cccccc !important;
    }

    button {
        border-radius: 3px;
        width: 50px;
        padding: 4px 0;
        background-color: white;
        border: none;
        font-size: 14px;
        color: ${COLORS.darkPink};
    }
`;

export default FormCont;
