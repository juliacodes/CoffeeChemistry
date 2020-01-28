import React from 'react';
import {
    GridContainer,
    Caption,
    Column,
    RightDoubleColumn,
    TextColumn,
    ImageColumn
} from './styles';
import { Heading } from '../../../Styling';

const Grid = props => (
    <GridContainer>
        <Column>
            <svg
                width='17'
                height='22'
                viewBox='0 0 17 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M15.208 11.708L9.76733 17.1486L9.76733 -4.26944e-07L7.23267 -3.1615e-07L7.23267 17.1486L1.79201 11.708L-3.71547e-07 13.5L8.5 22L17 13.5L15.208 11.708Z'
                    fill='black'
                />
            </svg>
            <span>Explore</span>
        </Column>
        <Column></Column>
        <Column></Column>
        <Caption>
            Discover the originals and flavors of different beans random text
            here oh well
        </Caption>
        <RightDoubleColumn>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            aenean ultricies risus, orci. Sed sit ultrices habitasse tincidunt
            eu, tempus mauris maecenas. Suspendisse sed quam convallis quis
            eget.{' '}
        </RightDoubleColumn>
        <TextColumn>
            Tristique tempus lacus, vitae, ullamcorper vivamus urna quisque in.
            A pellentesque facilisis tellus dignissim id. <br />
            <br />
            Mattis in et urna ac. Commodo scelerisque lacus phasellus vulputate
            massa ac. Feugiat et purus sed odio ut ipsum. Elementum orci
            placerat non scelerisque amet quam eget ipsum duis. Pellentesque id
            neque, etiam aliquam nunc ultricies molestie. <br />
            <br />
            Nibh elit, sodales sed vestibulum pellentesque. Euismod turpis
            ipsum, tortor ligula augue iaculis nullam ornare. Fermentum interdum
            eget etiam ac varius.
        </TextColumn>
        <TextColumn style={{ gridArea: '3/4/3/4' }}>
            Tristique tempus lacus, vitae, ullamcorper vivamus urna quisque in.
            A pellentesque facilisis tellus dignissim id. <br />
            <br />
            Mattis in et urna ac. Commodo scelerisque lacus phasellus vulputate
            massa ac. Feugiat et purus sed odio ut ipsum. Elementum orci
            placerat non scelerisque amet quam eget ipsum duis. Pellentesque id
            neque, etiam aliquam nunc ultricies molestie. <br />
            <br />
            Nibh elit, sodales sed vestibulum pellentesque. Euismod turpis
            ipsum, tortor ligula augue iaculis nullam ornare. Fermentum interdum
            eget etiam ac varius.
        </TextColumn>
        <ImageColumn />
        <TextColumn style={{ gridArea: '5/2/5/2' }}>
            <Heading>Hello</Heading>
            Tristique tempus lacus, vitae, ullamcorper vivamus urna quisque in.
            A pellentesque facilisis tellus dignissim id.
        </TextColumn>
        <TextColumn style={{ gridArea: '5/3/5/3' }}>
            <Heading>Hello</Heading>
            Tristique tempus lacus, vitae, ullamcorper vivamus urna quisque in.
            A pellentesque facilisis tellus dignissim id.
        </TextColumn>
        <TextColumn style={{ gridArea: '6/2/6/2' }}>
            <Heading>Hello</Heading>
            Tristique tempus lacus, vitae, ullamcorper vivamus urna quisque in.
            A pellentesque facilisis tellus dignissim id.
        </TextColumn>
        <TextColumn style={{ gridArea: '6/3/6/3' }}>
            <Heading>Hello</Heading>
            Tristique tempus lacus, vitae, ullamcorper vivamus urna quisque in.
            A pellentesque facilisis tellus dignissim id.
        </TextColumn>
    </GridContainer>
);

export default Grid;
