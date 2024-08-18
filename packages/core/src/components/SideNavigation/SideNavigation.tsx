import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModSideNavigationProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModSideNavigation = styled.nav<ModSideNavigationProps>`
    width: 250px;
    height: calc(100vh - 90px);
    position: sticky;
    top: 70px;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.scrollbarColor};
`

const SideNavigation = (
    { children, ...props }: ModSideNavigationProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSideNavigation {...props} ref={ref} data-test="side-navigation">
            {children}
        </ModSideNavigation>
    )
}

export default withSystemProps(forwardRef(SideNavigation))
