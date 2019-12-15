import React from 'react';
import { RecipeListCont, Option } from './styles';
import { Heading } from '../../Styling';

const RecipeList = () => (
    <RecipeListCont>
        <Heading>Recipes</Heading>
        <Option>Chemex</Option>
        <Option>french</Option>
        <Option>espres</Option>
        <Option>pourov</Option>
    </RecipeListCont>
);

export default RecipeList;
