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

    render(props) {
        const { serving, temp, grounds, water } = this.state;
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
                />
                <Steps steps={this.props.steps} />
            </RecipeCont>
        );
    }
}
