import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModTableHeadProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModTableHead = styled.th<ModTableHeadProps>`
    font-family: ${props => props.theme.typography.ff.primary};
    font-weight: ${props => props.theme.typography.fw.bold};
    color: ${props => props.theme.typography.color.main};
    text-align: left;
    padding: 16px;
`

const TableHead = (
    { children, ...props }: ModTableHeadProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTableHead {...props} ref={ref} data-test="tableHead">
            {children}
        </ModTableHead>
    )
}

export default withSystemProps(forwardRef(TableHead))
