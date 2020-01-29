import React from 'react';
import { GuideFooterCont } from './styles';
import { Inner, Paragraph } from '../../../Styling';

function GuideFooter() {
    return (
        <GuideFooterCont>
            <Inner>
                <Paragraph>Next Guide</Paragraph>
                <svg
                    className='RightArrow'
                    width='22'
                    height='17'
                    viewBox='0 0 22 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M11.708 1.79201L17.1486 7.23267L-8.53887e-07 7.23267L-6.323e-07 9.76733L17.1486 9.76733L11.708 15.208L13.5 17L22 8.5L13.5 -1.16425e-06L11.708 1.79201Z'
                        fill='black'
                    />
                </svg>
            </Inner>
        </GuideFooterCont>
    );
}

export default GuideFooter;
