import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModToolbarProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModToolbar = styled.nav<ModToolbarProps>`
    background-color: ${props => props.theme.mode};
    @media (max-width: 768px) {
        display: none;
    }
`

const Toolbar = (
    { children, ...props }: ModToolbarProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModToolbar {...props} ref={ref} data-test="toolbar">
            {children}
        </ModToolbar>
    )
}

export default withSystemProps(forwardRef(Toolbar))
