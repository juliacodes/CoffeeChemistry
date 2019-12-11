import React from 'react';
import { StarterCont } from './styles';
import logo from '../../Images/logo.png';
import { SmallHeading, Button } from '../../Styling';
function Starter() {
    return (
        <StarterCont>
            <img src={logo} alt={logo} />
            <SmallHeading>&#9675; brew your perfect cup &#9675;</SmallHeading>
            <Button>Begin</Button>
        </StarterCont>
    );
}

export default Starter;
