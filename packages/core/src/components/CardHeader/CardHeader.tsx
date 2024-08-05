import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCardHeader = styled.div<ModCardHeaderProps>``

const CardHeader = (
    { children, ...props }: ModCardHeaderProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCardHeader {...props} ref={ref} data-test="card-header">
            {children}
        </ModCardHeader>
    )
}

export default withSystemProps(forwardRef(CardHeader))
