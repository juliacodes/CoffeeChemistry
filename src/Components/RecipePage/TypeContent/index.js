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
                    <Paragraph style={{ maxWidth: '50%' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis in tempor velit in egestas cursus volutpat
                        ullamcorper. Non posuere purus ullamcorper in feugiat.
                        Cursus aliquam placerat egestas amet in vitae mattis
                        cras in.
                    </Paragraph>
                </ContainerMin>
                <Content steps={props.steps} ingredients={props.ingredients} />
            </InnerPadding>
        </RecipeFlexCont>
    </>
);

export default TypeContent;
