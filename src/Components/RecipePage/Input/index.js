import React, { Component } from 'react';
import { Inputs, InputWrapper } from './styles';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serving: 1,
            strength: 15,
            grounds: 15,
            water: 225
        };
        this.servingChange = this.servingChange.bind(this);
        this.strengthChange = this.strengthChange.bind(this);
    }

    servingChange(e) {
        let grounds = e.target.valueAsNumber * this.state.strength;
        this.setState({
            serving: e.target.valueAsNumber,
            grounds: grounds,
            water: grounds * this.state.strength
        });
    }

    strengthChange(e) {
        let strength = e.target.valueAsNumber + 12;
        let grounds = this.state.serving * strength;
        this.setState({
            strength: strength,
            grounds: grounds,
            water: grounds * strength
        });
    }

    render() {
        return (
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
                        value={this.state.serving}
                        onChange={this.servingChange}
                        className='num-input'
                        type='number'
                        name='name'
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
                            onChange={this.strengthChange}
                        />
                        <p>{this.state.strength}</p>
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
                        value='200˚F'
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
                        value={this.state.water}
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
                        value={this.state.grounds}
                    />
                </form>
                <form>
                    <legend>Equipment</legend>
                    <label style={{ display: 'none' }}>Coffee Grounds</label>
                    <br />
                    <p>{this.props.ingredients}</p>
                </form>
            </Inputs>
        );
    }
}
