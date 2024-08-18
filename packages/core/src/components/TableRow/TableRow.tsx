import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModTableRowProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModTableRow = styled.tr<ModTableRowProps>`
    &:hover {
        background-color: ${props => props.theme.color.light};
    }
`

const TableRow = (
    { children, ...props }: ModTableRowProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTableRow {...props} ref={ref} data-test="tableRow">
            {children}
        </ModTableRow>
    )
}

export default withSystemProps(forwardRef(TableRow))
