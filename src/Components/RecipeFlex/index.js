import React from 'react';
import {
    RecipeFlexCont,
    Left,
    Right,
    MainImage,
    RecipeContent,
    Inputs,
    Steps,
    Step,
    Enjoy
} from './styles';
import { SmallHeading, Paragraph } from '../../Styling';
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
                        Strength <u>Edit</u>
                    </legend>
                    <label style={{ display: 'none' }}>Strength</label>
                    <br />
                    <input type='text' name='name' placeholder='Medium' />
                </form>
                <form>
                    <legend>Temperature</legend>
                    <label style={{ display: 'none' }}>Temperature</label>
                    <br />
                    <input
                        disabled
                        class='disabled'
                        type='text'
                        name='name'
                        placeholder='200˚F'
                    />
                </form>
                <form>
                    <legend>Total Water</legend>
                    <label style={{ display: 'none' }}>Total Water</label>
                    <br />
                    <input
                        disabled
                        class='disabled'
                        type='text'
                        name='name'
                        placeholder='400g'
                    />
                </form>
                <form>
                    <legend>Coffee Grounds</legend>
                    <label style={{ display: 'none' }}>Coffee Grounds</label>
                    <br />
                    <input
                        disabled
                        class='disabled'
                        type='text'
                        name='name'
                        placeholder='30g'
                    />
                </form>
                <form>
                    <legend>Equipment</legend>
                    <label style={{ display: 'none' }}>Coffee Grounds</label>
                    <br />
                    <p>
                        Chemex carafe, chemex filters, grinder, digital scale,
                        kettle
                    </p>
                </form>
            </Inputs>
            <Steps>
                <Step>
                    <p>1.</p>
                    <p>Rinse Filter</p>
                </Step>
                <Step>
                    <p>2.</p>
                    <p>First Pour</p>
                    <p>400g</p>
                </Step>
                <Step>
                    <p>3.</p>
                    <p>Second Pour</p>
                    <p>100g</p>
                </Step>
                <Step>
                    <p>4.</p>
                    <p>Final Pour</p>
                    <p>200g</p>
                </Step>
                <Step>
                    <p>5.</p>
                    <p>Discard Filter</p>
                </Step>
            </Steps>
        </RecipeContent>
        <Enjoy>
            <img src={cup} />
            <SmallHeading>Enjoy</SmallHeading>
        </Enjoy>
    </>
);

export default RecipeFlex;
