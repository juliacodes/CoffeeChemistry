import React from 'react';
import { Container, Inner } from '../Styling';
import TypeContent from '../Components/RecipePage/TypeContent';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import chemexLarge from '../Images/chemexLarge.png';

function Chemex() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <TypeContent
                    type='Chemex'
                    image={chemexLarge}
                    steps='chemex'
                    ingredients='Chemex carafe, chemex filters, grinder, digital scale, kettle'
                />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Chemex;
