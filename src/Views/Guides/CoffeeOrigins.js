import React from 'react';
import { Container, Inner } from '../../Styling';
import NavBar from '../../Components/NavBar';
import Grid from '../../Components/GuidesPage/Grid';
import GuideHeading from '../../Components/GuidesPage/GuideHeading';
import GuideFooter from '../../Components/GuidesPage/GuideFooter';
import { FixedSpacing } from '../../Styling';

function CoffeeOrigins() {
    return (
        <Container>
            <NavBar type='simple' />
            <GuideHeading />
            <Inner
                style={{ paddingTop: 0, paddingBottom: 100, marginBottom: 120 }}
            >
                <Grid />
            </Inner>
            <FixedSpacing>
                <GuideFooter />
            </FixedSpacing>
        </Container>
    );
}

export default CoffeeOrigins;
