import React from 'react';
import { RecipeListCont, Option, Right, FlexImage } from './styles';
import { Link } from 'react-router-dom';
import { Heading, Paragraph, Button, Break } from '../../Styling';

const RecipeList = props => (
    <RecipeListCont>
        <Heading>Recipes</Heading>
        <Option>Chemex</Option>
        <Option>french</Option>
        <Option>espres</Option>
        <Option>pourov</Option>
    </RecipeListCont>
);

export default RecipeList;
