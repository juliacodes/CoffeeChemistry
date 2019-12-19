import React from 'react';
import { Container, Inner } from '../Styling';
import TypeContent from '../Components/RecipePage/TypeContent';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function Chemex() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <TypeContent type='Chemex' />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Chemex;
