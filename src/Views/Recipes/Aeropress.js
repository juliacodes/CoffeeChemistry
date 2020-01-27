import React from 'react';
import { Container, Inner } from '../../Styling';
import TypeContent from '../../Components/RecipePage/TypeContent';
import NavBar from '../../Components/NavBar';

function Aeropress() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='Aeropress'
                    steps='aeropress'
                    ingredients='Chemex carafe, chemex filters, grinder, digital scale, kettle'
                    paragraph='As one of the few coffee brewers that lives in MOMA’s
                    permanent design collection, Chemex is an iconic and
                    beautiful brew style that creates a unique and bright
                    flavor profile. While Chemex’s unique glass shape
                    definitely contributes to its great flavor, its patented
                    filter’s tight woven design is what makes this a truly
                    unique tasting coffee.'
                    flavor1='Acidic'
                    flavor2='Rich'
                />
            </Inner>
        </Container>
    );
}

export default Aeropress;
