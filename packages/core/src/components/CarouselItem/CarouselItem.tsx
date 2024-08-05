import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCarouselItem = styled.div<ModCarouselItemProps>`
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
`

const CarouselItem = (
    { children, ...props }: ModCarouselItemProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCarouselItem {...props} ref={ref} data-test="carousel-item">
            {children}
        </ModCarouselItem>
    )
}

export default withSystemProps(forwardRef(CarouselItem))
