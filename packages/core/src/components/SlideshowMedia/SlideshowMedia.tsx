import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModSlideshowMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSlideshowMedia = styled.div<ModSlideshowMediaProps>`
    text-align: center;
    margin-bottom: 12px;
`

const SlideshowMedia = (
    { children, ...props }: ModSlideshowMediaProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSlideshowMedia {...props} ref={ref} data-test="slideshow-media">
            {children}
        </ModSlideshowMedia>
    )
}

export default withSystemProps(forwardRef(SlideshowMedia))
