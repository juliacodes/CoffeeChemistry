import React from 'react';
import { Steps, Step } from './styles';

const RecipeSteps = () => (
    <Steps>
        <Step>
            <p>1.</p>
            <p>Rinse Filter</p>
        </Step>
        <Step>
            <p>2.</p>
            <p>First Pour</p>
            <p>400g</p>
        </Step>
        <Step>
            <p>3.</p>
            <p>Second Pour</p>
            <p>100g</p>
        </Step>
        <Step>
            <p>4.</p>
            <p>Final Pour</p>
            <p>200g</p>
        </Step>
        <Step>
            <p>5.</p>
            <p>Discard Filter</p>
        </Step>
    </Steps>
);

export default RecipeSteps;
