import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModSlideshowExcerptProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSlideshowExcerpt = styled.div<ModSlideshowExcerptProps>`
    text-align: center;
`

const SlideshowExcerpt = (
    { children, ...props }: ModSlideshowExcerptProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSlideshowExcerpt {...props} ref={ref} data-test="slideshow-excerpt">
            {children}
        </ModSlideshowExcerpt>
    )
}

export default withSystemProps(forwardRef(SlideshowExcerpt))
