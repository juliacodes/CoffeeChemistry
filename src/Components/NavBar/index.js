import React from 'react';
import { NavBarCont, NavLinks, Logo, Inner } from './styles';
import logo from '../../Images/logo.png';
import logoWhite from '../../Images/logoWhite.png';

import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: 'false',
            color: 'black',
            imageBlack: false
        };
    }

    handleScroll() {
        if (window.pageYOffset >= 10) {
            this.setState({
                scroll: window.pageYOffset / 4
            });

            console.log(window.pageYOffset);
        }

        if (window.pageYOffset >= 1530) {
            this.setState({
                color: 'white',
                imageBlack: true
            });
        } else {
            this.setState({
                color: 'black',
                imageBlack: false
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    render() {
        return (
            <NavBarCont>
                <Inner>
                    {this.props.type !== 'simple' && (
                        <Link
                            style={{
                                color: this.state.color
                            }}
                            to='/guides'
                        >
                            Guides
                        </Link>
                    )}

                    <Link className='Logo' to='/'>
                        {!this.state.imageBlack && (
                            <Logo
                                style={{
                                    transform:
                                        'rotate(' + this.state.scroll + 'deg)'
                                }}
                                src={logo}
                                alt={logo}
                            />
                        )}
                        {this.state.imageBlack && (
                            <Logo
                                style={{
                                    transform:
                                        'rotate(' + this.state.scroll + 'deg)'
                                }}
                                src={logoWhite}
                                alt={logo}
                            />
                        )}
                    </Link>
                    {this.props.type !== 'simple' && (
                        <Link
                            style={{
                                color: this.state.color
                            }}
                            to='/#recipes'
                        >
                            recipes
                        </Link>
                    )}
                </Inner>
            </NavBarCont>
        );
    }
}
