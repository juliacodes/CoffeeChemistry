import React from 'react';
import { Container, Inner } from '../Styling';
import NavBar from '../Components/NavBar';
import { Footer } from '../Components/Footer';
import RecipeList from '../Components/RecipeList';
function Recipes() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <RecipeList />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Recipes;
