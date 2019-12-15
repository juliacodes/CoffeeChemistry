import React from 'react';
import { FlexRowCont, Left, Right, FlexImage } from './styles';
import { Link } from 'react-router-dom';
import { Heading, Paragraph, Button, Break } from '../../Styling';

const FlexRow = props => (
    <FlexRowCont direction={props.direction}>
        <Left color={props.color} backgroundColor={props.backgroundColor}>
            <Heading>{props.Heading}</Heading>
            <Paragraph>{props.Paragraph}</Paragraph>
            <Break>
                <Link to={props.link}>
                    <Button>{props.button}</Button>
                </Link>
            </Break>
        </Left>
        <Right>
            <FlexImage image={props.image} />
        </Right>
    </FlexRowCont>
);

export default FlexRow;
