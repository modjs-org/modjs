import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModBreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModBreadcrumbs = styled.div<ModBreadcrumbsProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    color: ${props => props.theme.color.primary};
    display: flex;
    padding: 8px 0px 8px 0px;
    align-items: center;
`

const Breadcrumbs = (
    { children, ...props }: ModBreadcrumbsProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModBreadcrumbs {...props} ref={ref} data-test="Breadcrumbs">
            {children}
        </ModBreadcrumbs>
    )
}

export default withSystemProps(forwardRef(Breadcrumbs))
