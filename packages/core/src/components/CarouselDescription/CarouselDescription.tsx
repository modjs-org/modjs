import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCarouselDescriptionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCarouselDescription = styled.div<ModCarouselDescriptionProps>`
    text-align: center;
`

const CarouselDescription = (
    { children, ...props }: ModCarouselDescriptionProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCarouselDescription
            {...props}
            ref={ref}
            data-test="carousel-description"
        >
            {children}
        </ModCarouselDescription>
    )
}

export default withSystemProps(forwardRef(CarouselDescription))
