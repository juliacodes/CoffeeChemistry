import React from 'react';
import { Container, Inner, Heading, Spacing } from '../Styling';
import NavBar from '../Components/NavBar';
import RecipeList from '../Components/RecipeList';
import Guides from '../Components/Guides';

function App() {
    return (
        <Container style={{ backgroundColor: 'white', height: 'auto' }}>
            <NavBar />
            <Inner
                style={{
                    padding: '183px 0 200px 0',
                    zIndex: 5,
                    marginBottom: 800
                }}
            >
                <Spacing>
                    <Heading>
                        Working to make brewing the perfect cup of coffee easy.
                    </Heading>
                </Spacing>
                <Spacing>
                    <RecipeList id='recipes' />
                </Spacing>
            </Inner>
            <Spacing
                style={{
                    width: '100vw',
                    position: 'fixed',
                    zIndex: -99,
                    bottom: 0
                }}
            >
                <Guides />
            </Spacing>
        </Container>
    );
}

export default App;
