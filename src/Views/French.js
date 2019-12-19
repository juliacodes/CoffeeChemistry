import React from 'react';
import { Container, Inner } from '../Styling';
import TypeContent from '../Components/RecipePage/TypeContent';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function French() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <TypeContent type='French Press' />
                <Footer />
            </Inner>
        </Container>
    );
}

export default French;
