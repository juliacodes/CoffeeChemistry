import React from 'react';
import {
    RecipeFlexCont,
    Left,
    Right,
    MainImage,
    RecipeContent,
    Inputs,
    Steps
} from './styles';
import { SmallHeading, Paragraph } from '../../Styling';
import chemexLarge from '../../Images/chemexLarge.png';

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
        <RecipeContent>
            <Inputs>
                <form>
                    <legend>
                        Servings <u>Edit</u>
                    </legend>
                    <label style={{ display: 'none' }}>
                        Servings <u>Edit</u>
                    </label>
                    <br />
                    <input
                        type='number'
                        name='name'
                        placeholder='2'
                        value='2'
                    />
                </form>
                <form>
                    <legend>
                        Servings <u>Edit</u>
                    </legend>
                    <label style={{ display: 'none' }}>
                        Servings <u>Edit</u>
                    </label>
                    <br />
                    <input
                        type='number'
                        name='name'
                        placeholder='2'
                        value='2'
                    />
                </form>
            </Inputs>
            <Steps></Steps>
        </RecipeContent>
    </>
);

export default RecipeFlex;
