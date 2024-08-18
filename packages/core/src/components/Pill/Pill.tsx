import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModPillProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModPill = styled.div<ModPillProps>`
    padding: 8px;
    width: min-content;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.color.light};
    color: ${props => props.theme.typography.color.success};
    font-family: ${props => props.theme.typography.ff.primary};
    border: ${props => props.theme.border.dark};
`

const Pill = (
    { children, ...props }: ModPillProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModPill {...props} ref={ref} data-test="pill">
            {children}
        </ModPill>
    )
}

export default withSystemProps(forwardRef(Pill))
