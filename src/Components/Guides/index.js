import React from 'react';
import {
    GuidesCont,
    FlexRow,
    Column,
    SmallHeadingGuides,
    SmallerHeadingGuides
} from './styles';
import { Paragraph } from '../../Styling';

function Guides() {
    return (
        <GuidesCont>
            <SmallHeadingGuides>
                Really good coffee is complex and confusing for a new brewer,
                but it doesn’t have to be. Explore our guides to learn
                everything you’ll need.
            </SmallHeadingGuides>
            <FlexRow>
                <Column>
                    <SmallerHeadingGuides style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallerHeadingGuides>
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
                <Column>
                    <SmallerHeadingGuides style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallerHeadingGuides>{' '}
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
            </FlexRow>
            <FlexRow>
                <Column>
                    <SmallerHeadingGuides style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallerHeadingGuides>
                    <Paragraph>
                        Explore the originals and flavor types of different
                        beans
                    </Paragraph>
                </Column>
                <Column>
                    <SmallerHeadingGuides style={{ color: 'white' }}>
                        Coffee Origins
                    </SmallerHeadingGuides>{' '}
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
