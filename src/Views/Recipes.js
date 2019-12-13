import React from 'react';
import { Container, Inner } from '../Styling';
import NavBar from '../Components/NavBar';
import FlexRow from '../Components/FlexRow';
import ExploreRow from '../Components/ExploreRow';
import { Footer } from '../Components/Footer';
function Recipes() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <FlexRow
                    Heading='brew with confidence'
                    Paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    donec in vitae nulla at aliquet quis velit eget.'
                    button='view guides'
                />
                <ExploreRow />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Recipes;
