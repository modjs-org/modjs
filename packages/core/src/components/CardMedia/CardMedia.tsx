import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCardMedia = styled.div<ModCardMediaProps>`
    margin-bottom: 6px;
`

const CardMedia = (
    { children, ...props }: ModCardMediaProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCardMedia {...props} ref={ref} data-test="card-media">
            {children}
        </ModCardMedia>
    )
}

export default withSystemProps(forwardRef(CardMedia))
