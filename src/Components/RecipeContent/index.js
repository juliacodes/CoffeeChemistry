import React from 'react';
import { RecipeCont, Inputs, InputWrapper } from './styles';
import RecipeSteps from '../RecipeSteps';
import RecipeInput from '../RecipeInput';

const RecipeContent = () => (
    <RecipeCont>
        <RecipeInput />
        <RecipeSteps />
    </RecipeCont>
);

export default RecipeContent;
