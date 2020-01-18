import React from 'react';
import { NavBarCont, NavLinks, Logo, Inner } from './styles';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: 'false'
        };
    }

    handleScroll() {
        // ADD IF YOU NEED BOTTOM
        // const windowHeight =
        //     'innerHeight' in window
        //         ? window.innerHeight
        //         : document.documentElement.offsetHeight;
        // const { body } = document;
        // const html = document.documentElement;
        // const docHeight = Math.max(
        //     body.scrollHeight,
        //     body.offsetHeight,
        //     html.clientHeight,
        //     html.scrollHeight,
        //     html.offsetHeight
        // );
        // const windowBottom = windowHeight + window.pageYOffset;

        if (window.pageYOffset >= 10) {
            this.setState({
                scroll: window.pageYOffset / 4
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
                    <Link to='/guides'>Guides</Link>
                    <Link to='/'>
                        <Logo
                            style={{
                                transform:
                                    'rotate(' + this.state.scroll + 'deg)'
                            }}
                            src={logo}
                            alt={logo}
                        />
                    </Link>

                    <Link to='/recipes'>recipes</Link>
                </Inner>
            </NavBarCont>
        );
    }
}
