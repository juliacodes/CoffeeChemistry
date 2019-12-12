import React from 'react';
import { FlexRowCont, Left, Right, FlexImage } from './styles';
import { Link } from 'react-router-dom';
import { Heading, Paragraph, Button, Break } from '../../Styling';

function FlexRow() {
    return (
        <FlexRowCont>
            <Left>
                <Heading>BREW WITH CONFIDENCE</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    donec in vitae nulla at aliquet quis velit eget.
                </Paragraph>
                <Break>
                    <Link to='/guides'>
                        <Button>View Guides</Button>
                    </Link>
                </Break>
            </Left>
            <Right>
                <FlexImage />
            </Right>
        </FlexRowCont>
    );
}

export default FlexRow;
