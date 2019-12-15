import React from 'react';
import { Container, Inner } from '../Styling';
import RecipeFlex from '../Components/RecipeFlex';
import NavBar from '../Components/NavBar';

import { Footer } from '../Components/Footer';
function Chemex() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <RecipeFlex />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Chemex;
