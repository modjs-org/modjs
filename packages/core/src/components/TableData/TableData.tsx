import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModTableDataProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModTableData = styled.td<ModTableDataProps>`
    padding: 16px;
    text-align: left;
    width: 50px;
    font-family: ${props => props.theme.typography.ff.primary};
    color: ${props => props.theme.typography.color.main};
    border-top: ${props => props.theme.border.light};
`

const TableData = (
    { children, ...props }: ModTableDataProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTableData {...props} ref={ref} data-test="tableData">
            {children}
        </ModTableData>
    )
}

export default withSystemProps(forwardRef(TableData))
