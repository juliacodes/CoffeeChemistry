import React from 'react';
import { Container, Inner } from '../Styling';
import NavBar from '../Components/NavBar';
import List from '../Components/List';
function Recipes() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <List />
            </Inner>
        </Container>
    );
}

export default Recipes;
