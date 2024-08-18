import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCarouselExcerptProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCarouselExcerpt = styled.div<ModCarouselExcerptProps>`
    text-align: center;
`

const CarouselExcerpt = (
    { children, ...props }: ModCarouselExcerptProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCarouselExcerpt {...props} ref={ref} data-test="carousel-excerpt">
            {children}
        </ModCarouselExcerpt>
    )
}

export default withSystemProps(forwardRef(CarouselExcerpt))
