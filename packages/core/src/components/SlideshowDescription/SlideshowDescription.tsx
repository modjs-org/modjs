import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModSlideshowDescriptionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSlideshowDescription = styled.div<ModSlideshowDescriptionProps>`
    text-align: center;
`

const SlideshowDescription = (
    { children, ...props }: ModSlideshowDescriptionProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSlideshowDescription
            {...props}
            ref={ref}
            data-test="slideshow-description"
        >
            {children}
        </ModSlideshowDescription>
    )
}

export default withSystemProps(forwardRef(SlideshowDescription))
