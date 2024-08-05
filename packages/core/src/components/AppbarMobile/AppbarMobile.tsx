import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface AppbarMobileProps {
    children: React.ReactNode
    sticky?: boolean
    ref?: React.Ref<HTMLElement>
}

const forwardProps = (prop: string) => !['sticky'].includes(prop)

const ModAppbarMobile = styled.header.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<AppbarMobileProps>`
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
    @media (min-width: 769px) {
        display: none;
    }
`

const AppbarMobile = (
    { children, sticky, ...props }: AppbarMobileProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModAppbarMobile
            {...props}
            ref={ref}
            sticky={sticky === true ? true : false}
            data-test="appbar-mobile"
        >
            {children}
        </ModAppbarMobile>
    )
}

export default withSystemProps(forwardRef(AppbarMobile))
