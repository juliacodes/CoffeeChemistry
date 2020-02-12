import React, { Component } from 'react';
import { Inputs, InputWrapper } from './styles';
import Odometer from 'react-odometerjs';
import 'rc-input-number/assets/index.css';
import InputNumber from 'rc-input-number';

export default class Input extends Component {
    render(props) {
        return (
            <Inputs>
                <form>
                    <legend>
                        Servings <u>Edit</u>
                    </legend>
                    <label>
                        Servings <u>Edit</u>
                    </label>
                    <InputNumber
                        aria-label='Simple number input example'
                        min={1}
                        max={10}
                        style={{ width: 100 }}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                </form>
                <form>
                    <legend className='drag-legend'>
                        Strength <u>Edit</u>
                    </legend>
                    <label>Strength</label>
                    <InputWrapper>
                        <datalist id='ticks'>
                            <option id='weak'></option>
                            <option id='medWeak'></option>
                            <option id='med'></option>
                            <option id='medStrong'></option>
                            <option id='strong'></option>
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
                            onChange={e => this.props.strengthChange(e)}
                        />
                    </InputWrapper>
                </form>
                <form>
                    <legend>Grind</legend>
                    <label>Grind</label>
                    <input
                        disabled
                        className='disabled num-input'
                        type='text'
                        name='name'
                        value='Med-Course'
                    />
                </form>
                <form>
                    <legend>Temperature</legend>
                    <label>Temperature</label>
                    <Odometer
                        format='d'
                        duration={500}
                        value={this.props.temp}
                    />
                    <span>˚F</span>
                </form>
                <form>
                    <legend>Total Water</legend>
                    <label>Total Water</label>
                    <Odometer
                        format='d'
                        duration={500}
                        value={this.props.water}
                    />
                    <span>g</span>
                </form>
                <form>
                    <legend>Coffee Grounds</legend>
                    <label>Coffee Grounds</label>
                    <Odometer
                        format='d'
                        duration={500}
                        value={this.props.grounds}
                    />
                    <span>g</span>
                </form>
                <form>
                    <legend>Equipment</legend>
                    <label>Coffee Grounds</label>
                    <p>{this.props.ingredients}</p>
                </form>
            </Inputs>
        );
    }
}
