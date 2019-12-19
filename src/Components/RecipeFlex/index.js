import React from 'react';
import { RecipeFlexCont, Left, Right, MainImage, Enjoy } from './styles';
import { SmallHeading, Paragraph } from '../../Styling';
import RecipeContent from '../RecipeContent';
import chemexLarge from '../../Images/chemexLarge.png';
import cup from '../../Images/cup.jpg';

const RecipeFlex = () => (
    <>
        <RecipeFlexCont>
            <Left>
                <MainImage src={chemexLarge}></MainImage>
            </Left>
            <Right>
                <SmallHeading>Brewing with Chemex</SmallHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Convallis in tempor velit in egestas cursus volutpat
                    ullamcorper. Non posuere purus ullamcorper in feugiat.
                    Cursus aliquam placerat egestas amet in vitae mattis cras
                    in.
                </Paragraph>
            </Right>
        </RecipeFlexCont>
        <RecipeContent />
        <Enjoy>
            <img src={cup} alt={cup} />
            <SmallHeading>Enjoy</SmallHeading>
        </Enjoy>
    </>
);

export default RecipeFlex;
