import React from 'react';
import { Container, Inner } from './Styling';
import NavBar from './Components/NavBar';
import FlexRow from './Components/FlexRow';
import ExploreRow from './Components/ExploreRow';
import brewTypes from './Images/brewTypes.jpg';
import { Footer } from './Components/Footer';
function App() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <FlexRow
                    Heading='brew with confidence'
                    Paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    donec in vitae nulla at aliquet quis velit eget.'
                />
                <ExploreRow />
                <FlexRow
                    backgroundColor='#FAF1EF'
                    color='#E98383'
                    image={brewTypes}
                    direction='row-reverse'
                    Heading='Recipes by brew type'
                    Paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    donec in vitae nulla at aliquet quis velit eget.'
                />
                <Footer />
            </Inner>
        </Container>
    );
}

export default App;
