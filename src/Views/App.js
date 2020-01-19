import React from 'react';
import { Container, Inner, Heading, Spacing } from '../Styling';
import NavBar from '../Components/NavBar';
import RecipeList from '../Components/RecipeList';
import Guides from '../Components/Guides';

function App() {
    return (
        <Container>
            <NavBar />
            <Inner style={{ paddingTop: '183px' }}>
                <Spacing>
                    <Heading>
                        Working to make brewing the perfect cup of coffee easy.
                    </Heading>
                </Spacing>
                <Spacing>
                    <RecipeList id='recipes' />
                </Spacing>
            </Inner>
            <Spacing style={{ width: '100%' }}>
                <Guides />
            </Spacing>
        </Container>
    );
}

export default App;
