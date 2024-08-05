import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCardFooter = styled.div<ModCardFooterProps>``

const CardFooter = (
    { children, ...props }: ModCardFooterProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCardFooter {...props} ref={ref} data-test="card-footer">
            {children}
        </ModCardFooter>
    )
}

export default withSystemProps(forwardRef(CardFooter))
