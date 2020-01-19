import React from 'react';
import { RecipeFlexCont, InnerPadding } from './styles';
import { Heading, Paragraph } from '../../../Styling';
import Content from '../Content';

const TypeContent = props => (
    <>
        <RecipeFlexCont>
            <InnerPadding>
                <Heading>Brewing with {props.type}</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Convallis in tempor velit in egestas cursus volutpat
                    ullamcorper. Non posuere purus ullamcorper in feugiat.
                    Cursus aliquam placerat egestas amet in vitae mattis cras
                    in.
                </Paragraph>
            </InnerPadding>
        </RecipeFlexCont>
        <Content steps={props.steps} ingredients={props.ingredients} />
    </>
);

export default TypeContent;
