import React from 'react';
import { RecipeCont, Inputs, Steps, Step } from './styles';

const RecipeContent = () => (
    <RecipeCont>
        <Inputs>
            <form>
                <legend>
                    Servings <u>Edit</u>
                </legend>
                <label style={{ display: 'none' }}>
                    Servings <u>Edit</u>
                </label>
                <br />
                <input type='number' name='name' placeholder='2' />
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
                    className='disabled'
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
                    className='disabled'
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
                    className='disabled'
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
    </RecipeCont>
);

export default RecipeContent;
