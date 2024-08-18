import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCarouselFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCarouselFooter = styled.div<ModCarouselFooterProps>`
    text-align: center;
`

const CarouselFooter = (
    { children, ...props }: ModCarouselFooterProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCarouselFooter {...props} ref={ref} data-test="carousel-footer">
            {children}
        </ModCarouselFooter>
    )
}

export default withSystemProps(forwardRef(CarouselFooter))
