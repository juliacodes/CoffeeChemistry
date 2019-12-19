import React from 'react';
import { Inputs, InputWrapper } from './styles';

const Input = props => (
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
                    defaultValue='3'
                    max='5'
                    step='1'
                    list='ticks'
                />
            </InputWrapper>
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
            <p>{props.ingredients}</p>
        </form>
    </Inputs>
);

export default Input;
