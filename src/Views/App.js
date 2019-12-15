import React from 'react';
import { Container, Inner } from '../Styling';
import NavBar from '../Components/NavBar';
import FlexRow from '../Components/FlexRow';
import ExploreRow from '../Components/ExploreRow';
import brewTypes from '../Images/brewTypes.jpg';
import { Footer } from '../Components/Footer';
function App() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <FlexRow
                    Heading='brew with confidence'
                    link='/guides'
                    Paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    donec in vitae nulla at aliquet quis velit eget.'
                    button='view guides'
                />
                <ExploreRow />
                <FlexRow
                    backgroundColor='#FAF1EF'
                    color='#E98383'
                    image={brewTypes}
                    link='/recipes'
                    direction='row-reverse'
                    Heading='Recipes by brew type'
                    Paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    donec in vitae nulla at aliquet quis velit eget.'
                    button='view recipes'
                />
                <Footer />
            </Inner>
        </Container>
    );
}

export default App;
