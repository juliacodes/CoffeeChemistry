import React from 'react';
import { RecipeFlexCont, Left, Right, MainImage, Enjoy } from './styles';
import { SmallHeading, Paragraph } from '../../../Styling';
import Content from '../Content';
import cup from '../../../Images/cup.jpg';

const TypeContent = props => (
    <>
        <RecipeFlexCont>
            <Left>
                <MainImage src={props.image}></MainImage>
            </Left>
            <Right>
                <SmallHeading>Brewing with {props.type}</SmallHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Convallis in tempor velit in egestas cursus volutpat
                    ullamcorper. Non posuere purus ullamcorper in feugiat.
                    Cursus aliquam placerat egestas amet in vitae mattis cras
                    in.
                </Paragraph>
            </Right>
        </RecipeFlexCont>
        <Content steps={props.steps} ingredients={props.ingredients} />
        <Enjoy>
            <img src={cup} alt={cup} />
            <SmallHeading>Enjoy</SmallHeading>
        </Enjoy>
    </>
);

export default TypeContent;
