import React from 'react';
import { RecipeCont } from './styles';
import Steps from '../Steps';
import Input from '../Input';

const Content = props => (
    <RecipeCont>
        <Input ingredients={props.ingredients} />
        <Steps steps={props.steps} />
    </RecipeCont>
);

export default Content;
