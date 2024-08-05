import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCardContent = styled.div<ModCardContentProps>``

const CardContent = (
    { children, ...props }: ModCardContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCardContent {...props} ref={ref} data-test="card-content">
            {children}
        </ModCardContent>
    )
}

export default withSystemProps(forwardRef(CardContent))
