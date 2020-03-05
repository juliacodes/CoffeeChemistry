import React from 'react';
import { RecipeFlexCont, InnerPadding, ContainerMin } from './styles';
import { Heading, Paragraph } from '../../../Styling';
import Content from '../Content';

const TypeContent = props => (
    <>
        <RecipeFlexCont>
            <InnerPadding>
                <ContainerMin>
                    <Heading>Brewing with {props.type}</Heading>
                    <Paragraph>{props.paragraph}</Paragraph>
                    <Paragraph style={{ color: 'black' }}>
                        Flavor types: <span>{props.flavor1}</span>
                        <span>{props.flavor2}</span>
                    </Paragraph>
                </ContainerMin>
                <Content steps={props.steps} ingredients={props.ingredients} />
            </InnerPadding>
        </RecipeFlexCont>
    </>
);

export default TypeContent;
