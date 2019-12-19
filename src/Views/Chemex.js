import React from 'react';
import { Container, Inner } from '../Styling';
import RecipeTypeContent from '../Components/RecipeTypeContent';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function Chemex() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <RecipeTypeContent />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Chemex;
