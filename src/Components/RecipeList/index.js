import React from 'react';
import { Link } from 'react-router-dom';

import { RecipeListCont, Option } from './styles';
import { Heading } from '../../Styling';

const RecipeList = () => (
    <RecipeListCont>
        <Heading>Recipes</Heading>
        <Link to='/chemex'>
            <Option>Chemex</Option>
        </Link>
        <Link to='/french'>
            <Option className='french'>french</Option>
        </Link>
        <Link to='/espresso'>
            <Option className='espresso'>espresso</Option>
        </Link>
        <Link to='/pourover'>
            <Option className='pourover'>pourover</Option>
        </Link>
    </RecipeListCont>
);

export default RecipeList;
