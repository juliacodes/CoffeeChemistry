import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeListCont, Option } from './styles';

const RecipeList = () => (
    <RecipeListCont>
        <Link to='/chemex'>
            <Option className='wave'>Chemex</Option>
        </Link>
        <Link to='/french'>
            <Option className='wave'>french press</Option>
        </Link>
        <Link to='/aeropress'>
            <Option className='wave'>aeropress</Option>
        </Link>
        <Link to='/espresso'>
            <Option className='wave'>espresso</Option>
        </Link>
        <Link to='/pourover'>
            <Option className='wave'>pourover</Option>
        </Link>
    </RecipeListCont>
);

export default RecipeList;
