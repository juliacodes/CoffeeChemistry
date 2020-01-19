import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeListCont, Option } from './styles';

const RecipeList = () => (
    <RecipeListCont>
        <Link className='chemex' to='/chemex'>
            <Option>Chemex</Option>
        </Link>
        <Link className='frenchpress' to='/french'>
            <Option>french press</Option>
        </Link>
        <Link className='aeropress' to='/aeropress'>
            <Option>aeropress</Option>
        </Link>
        <Link className='espresso' to='/espresso'>
            <Option>espresso</Option>
        </Link>
        <Link className='pourover' to='/pourover'>
            <Option>pourover</Option>
        </Link>
    </RecipeListCont>
);

export default RecipeList;
