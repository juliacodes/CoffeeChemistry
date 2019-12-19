import React from 'react';
import { RecipeCont, Inputs, Steps, Step, InputWrapper } from './styles';

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
                <input
                    className='num-input'
                    type='number'
                    name='name'
                    placeholder='2'
                />
            </form>
            <form>
                <legend className='drag-legend'>
                    Strength <u>Edit</u>
                </legend>
                <label style={{ display: 'none' }}>Strength</label>
                <br />
                <br />
                <InputWrapper>
                    <datalist id='ticks'>
                        <option id='weak'>Weak</option>
                        <option id='medWeak'></option>
                        <option id='med'>&nbsp; Medium</option>
                        <option id='medStrong'></option>
                        <option id='strong'> Strong</option>
                    </datalist>
                    <input
                        id='CoffeeStrength'
                        name='coffeestrength'
                        className='dragger'
                        type='range'
                        min='1'
                        max='5'
                        step='1'
                        list='ticks'
                    />
                </InputWrapper>
                {/* <input
                    type='text'
                    list='strength'
                    name='strength'
                    placeholder='Medium'
                />
                <datalist id='strength'>
                    <option value='Weak' />
                    <option value='Medium Weak' />
                    <option value='Medium' />
                    <option value='Medium Strong' />
                    <option value='Strong' />
                </datalist> */}
            </form>
            <form>
                <legend>Temperature</legend>
                <label style={{ display: 'none' }}>Temperature</label>
                <br />
                <input
                    disabled
                    className='disabled num-input'
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
                    className='disabled num-input'
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
                    className='disabled num-input'
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
