import React from 'react';
import { Container, Inner } from '../../Styling';
import NavBar from '../../Components/NavBar';
import Grid from '../../Components/GuidesPage/Grid';
import GuideHeading from '../../Components/GuidesPage/GuideHeading';

function CoffeeOrigins() {
    return (
        <Container>
            <NavBar type='simple' />

            <GuideHeading />
            <Inner style={{ paddingTop: 0 }}>
                <Grid></Grid>
            </Inner>
        </Container>
    );
}

export default CoffeeOrigins;
