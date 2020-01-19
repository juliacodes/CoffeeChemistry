import React, { Component } from 'react';
import { Inputs, InputWrapper } from './styles';
import Odometer from 'react-odometerjs';
export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serving: 0,
            strength: 15,
            grounds: 0,
            water: 0,
            temp: 0
        };
        this.servingChange = this.servingChange.bind(this);
        this.strengthChange = this.strengthChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            serving: 1,
            strength: 15,
            grounds: 15,
            water: 225,
            temp: 200
        });
    }

    servingChange(e) {
        let grounds = e.target.valueAsNumber * this.state.strength;
        this.setState({
            serving: e.target.valueAsNumber,
            grounds: grounds,
            water: 225 * e.target.valueAsNumber
        });
    }

    strengthChange(e) {
        let strength = Math.round(
            this.state.water / (e.target.valueAsNumber + 12)
        );
        let grounds = this.state.serving * strength;
        this.setState({
            strength: strength,
            grounds: grounds
        });
    }

    render() {
        const { serving, strength, temp, grounds, water } = this.state;
        return (
            <Inputs>
                <form>
                    <legend>
                        Servings <u>Edit</u>
                    </legend>
                    <label>
                        Servings <u>Edit</u>
                    </label>
                    <input
                        value={serving}
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
                            onChange={this.strengthChange}
                        />
                    </InputWrapper>
                </form>
                <form>
                    <legend>Temperature</legend>
                    <label>Temperature</label>
                    <Odometer format='d' duration={500} value={temp} />
                    <span>˚F</span>
                </form>
                <form>
                    <legend>Total Water</legend>
                    <label>Total Water</label>
                    <Odometer format='d' duration={500} value={water} />
                    <span>g</span>
                </form>
                <form>
                    <legend>Coffee Grounds</legend>
                    <label>Coffee Grounds</label>
                    <Odometer format='d' duration={500} value={grounds} />
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
