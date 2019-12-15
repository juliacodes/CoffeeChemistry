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

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
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

        if (window.pageYOffset <= 50) {
            this.setState({
                scroll: false
            });
        } else {
            this.setState({
                scroll: true
            });
        }
    }

    render() {
        const { scroll } = this.state;
        return (
            <NavBarCont
                style={
                    scroll
                        ? {
                              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                          }
                        : {}
                }
            >
                <Inner>
                    <Link to='/'>
                        <Logo src={logo} alt={logo} />
                    </Link>
                    <NavLinks>
                        <Link to='/about'>about</Link>
                        <Link to='/guides'>guides</Link>
                        <Link to='/recipes'>recipes</Link>
                    </NavLinks>
                </Inner>
            </NavBarCont>
        );
    }
}
