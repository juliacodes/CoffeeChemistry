import React, { Component } from 'react';
import { RecipeCont } from './styles';
import Steps from '../Steps';
import Input from '../Input';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serving: 0,
            strength: 15,
            grounds: 0,
            water: 0,
            temp: 0
        };
        this.strengthChange = this.strengthChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            serving: 2,
            strength: 15,
            grounds: 30,
            water: 450,
            temp: 200,
            value: 2
        });
    }

    onChange = value => {
        this.setState({ value });
        let water = value * 225;
        let grounds = water / this.state.strength;

        console.log('serving: ' + value);
        console.log('water: ' + water);
        console.log('grounds: ' + grounds);
        this.setState({
            serving: value,
            grounds: grounds,
            water: water
        });
    };

    strengthChange(e) {
        let grounds = Math.round(this.state.water / e.target.valueAsNumber);
        console.log('grounds: ' + grounds);

        this.setState({
            strength: e.target.valueAsNumber,
            grounds: grounds
        });
    }

    render(props) {
        const { value, serving, temp, grounds, water } = this.state;
        return (
            <RecipeCont>
                <Input
                    serving={serving}
                    temp={temp}
                    grounds={grounds}
                    water={water}
                    strengthChange={this.strengthChange}
                    servingChange={this.servingChange}
                    ingredients={this.props.ingredients}
                    value={value}
                    onChange={this.onChange}
                />
                <Steps
                    serving={serving}
                    temp={temp}
                    grounds={grounds}
                    water={water}
                    steps={this.props.steps}
                />
            </RecipeCont>
        );
    }
}
