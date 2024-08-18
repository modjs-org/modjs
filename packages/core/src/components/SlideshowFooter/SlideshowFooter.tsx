import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModSlideshowFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSlideshowFooter = styled.div<ModSlideshowFooterProps>`
    text-align: center;
`

const SlideshowFooter = (
    { children, ...props }: ModSlideshowFooterProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSlideshowFooter {...props} ref={ref} data-test="slideshow-footer">
            {children}
        </ModSlideshowFooter>
    )
}

export default withSystemProps(forwardRef(SlideshowFooter))
