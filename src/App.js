import React from 'react';
import { Container, Inner } from './Styling';
import NavBar from './Components/NavBar';
import FlexRow from './Components/FlexRow';
import ExploreRow from './Components/ExploreRow';
function App() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <FlexRow />
                <ExploreRow />
                <FlexRow />
            </Inner>
        </Container>
    );
}

export default App;
