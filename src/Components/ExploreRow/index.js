import React from 'react';
import { ExploreRowCont, TriSplit, Column, Image } from './styles';
import { Paragraph, SmallHeading } from '../../Styling';

function ExploreRow() {
    return (
        <ExploreRowCont>
            <SmallHeading>explore Origins</SmallHeading>
            <TriSplit>
                <Column>
                    <Image className='arabic' />
                    <SmallHeading>Arabica</SmallHeading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mi, donec in vitae nulla at aliquet quis velit eget.
                    </Paragraph>
                </Column>
                <Column>
                    <Image className='robusta' />
                    <SmallHeading>Robusta</SmallHeading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mi, donec in vitae nulla at aliquet quis velit eget.
                    </Paragraph>
                </Column>
                <Column>
                    <Image className='liberica' />
                    <SmallHeading>Liberica</SmallHeading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mi, donec in vitae nulla at aliquet quis velit eget.
                    </Paragraph>
                </Column>
            </TriSplit>
        </ExploreRowCont>
    );
}

export default ExploreRow;
