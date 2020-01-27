import React from 'react';
import { Container } from '../../Styling';
import NavBar from '../../Components/NavBar';
import Grid from '../../Components/GuidesPage/Grid';
import GuideHeading from '../../Components/GuidesPage/GuideHeading';

function CoffeeOrigins() {
    return (
        <Container>
            <NavBar type='simple' />
            <GuideHeading />
        </Container>
    );
}

export default CoffeeOrigins;
