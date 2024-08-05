import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModSlideshowItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSlideshowItem = styled.div<ModSlideshowItemProps>`
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
`

const SlideshowItem = (
    { children, ...props }: ModSlideshowItemProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSlideshowItem {...props} ref={ref} data-test="slideshow-item">
            {children}
        </ModSlideshowItem>
    )
}

export default withSystemProps(forwardRef(SlideshowItem))
