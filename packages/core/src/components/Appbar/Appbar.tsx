import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface AppbarProps {
    children: React.ReactNode
    sticky?: boolean
    ref?: React.Ref<HTMLElement>
}

const forwardProps = (prop: string) => !['sticky'].includes(prop)

const ModAppbar = styled.header.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<AppbarProps>`
    background-color: ${props => props.theme.mode};
    z-index: 1;
    padding: 8px 0px 8px 0px;
    border-bottom: ${props => props.theme.border.dark};
    ${props =>
        props.sticky &&
        `
        position: sticky;
        top: 0;
        width: 100%;

    `};
`

const Appbar = (
    { children, sticky, ...props }: AppbarProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModAppbar
            {...props}
            ref={ref}
            sticky={sticky === true ? true : false}
            data-test="appbar"
        >
            {children}
        </ModAppbar>
    )
}

export default withSystemProps(forwardRef(Appbar))
