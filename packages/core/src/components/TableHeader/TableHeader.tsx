import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModTableHeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>

    sticky?: boolean
}

const forwardProps = (prop: string) => !['sticky'].includes(prop)

const ModTableHeader = styled.thead.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModTableHeaderProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    color: ${props => props.theme.typography.color.main};
    background-color: ${props => props.theme.color.light};
`

const TableHeader = (
    { children, ...props }: ModTableHeaderProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTableHeader {...props} ref={ref} data-test="tableHeader">
            {children}
        </ModTableHeader>
    )
}

export default withSystemProps(forwardRef(TableHeader))
