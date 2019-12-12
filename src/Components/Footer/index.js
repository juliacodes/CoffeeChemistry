import React from 'react';
import FooterCont from './styles';
import { Logo } from '../NavBar/styles';
import Form from '../Form';
import logo from '../../Images/logo.png';
import { Paragraph } from '../../Styling';
export const Footer = () => (
    <FooterCont>
        <Logo src={logo} alt={logo} />
        <Paragraph>join our coffee newsletter</Paragraph>
        <Form />
    </FooterCont>
);
