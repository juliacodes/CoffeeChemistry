import React from 'react';
import { Container, Inner } from '../Styling';
import TypeContent from '../Components/RecipePage/TypeContent';
import NavBar from '../Components/NavBar';

function Espresso() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='Espresso'
                    steps='espresso'
                    ingredients='French Press carafe, Burr Grinder, Digital Scale, Kettle'
                    paragraph='As one of the few coffee brewers that lives in MOMA’s
                    permanent design collection, Chemex is an iconic and
                    beautiful brew style that creates a unique and bright
                    flavor profile. While Chemex’s unique glass shape
                    definitely contributes to its great flavor, its patented
                    filter’s tight woven design is what makes this a truly
                    unique tasting coffee.'
                    flavor1='Rich'
                    flavor2='Acidic'
                />
            </Inner>
        </Container>
    );
}

export default Espresso;
