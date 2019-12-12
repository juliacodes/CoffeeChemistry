import React from 'react';
import { Container, Inner } from './Styling';
import NavBar from './Components/NavBar';
import FlexRow from './Components/FlexRow';
function App() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <FlexRow />
            </Inner>
        </Container>
    );
}

export default App;
