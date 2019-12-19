import React from 'react';
import { Container, Inner } from '../Styling';
import TypeContent from '../Components/RecipePage/TypeContent';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import frenchLarge from '../Images/frenchLarge.png';

function French() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <TypeContent
                    type='French Press'
                    image={frenchLarge}
                    steps='french'
                    ingredients='French Press carafe, Burr Grinder, Digital Scale, Kettle'
                />
                <Footer />
            </Inner>
        </Container>
    );
}

export default French;
