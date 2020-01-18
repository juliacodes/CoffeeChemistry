import React from 'react';
import { GuidesCont, FlexRow, Column } from './styles';
import { SmallHeading, Paragraph } from '../../Styling';

function Guides() {
    return (
        <GuidesCont>
            <SmallHeading
                style={{ color: 'white', margin: '0 auto 100px auto' }}
            >
                Really good coffee is complex and confusing for a new brewer,
                but it doesn’t have to be. Explore our guides to learn
                everything you’ll need.
            </SmallHeading>
            <FlexRow>
                <Column>
                    <SmallHeading style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallHeading>
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
                <Column>
                    <SmallHeading style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallHeading>{' '}
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
            </FlexRow>
            <FlexRow>
                <Column>
                    <SmallHeading style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallHeading>
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
                <Column>
                    <SmallHeading style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallHeading>{' '}
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
            </FlexRow>
        </GuidesCont>
    );
}

export default Guides;
