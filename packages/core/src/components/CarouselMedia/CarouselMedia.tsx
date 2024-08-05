import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCarouselMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCarouselMedia = styled.div<ModCarouselMediaProps>`
    text-align: center;
    margin-bottom: 12px;
`

const CarouselMedia = (
    { children, ...props }: ModCarouselMediaProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCarouselMedia {...props} ref={ref} data-test="carousel-media">
            {children}
        </ModCarouselMedia>
    )
}

export default withSystemProps(forwardRef(CarouselMedia))
