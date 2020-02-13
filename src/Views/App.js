import React from 'react';
import {
    Container,
    InnerLanding,
    Heading,
    Spacing,
    FixedSpacing,
    Loader
} from '../Styling';
import NavBar from '../Components/NavBar';
import RecipeList from '../Components/RecipeList';
import Guides from '../Components/Guides';

function App() {
    return (
        <Container>
            <Loader />
            <NavBar />
            <InnerLanding>
                <Spacing>
                    <Heading>
                        Built to make brewing the perfect cup of coffee easy.
                    </Heading>
                </Spacing>
                <Spacing>
                    <RecipeList />
                </Spacing>
            </InnerLanding>
            <FixedSpacing>
                <Guides />
            </FixedSpacing>
        </Container>
    );
}

export default App;
