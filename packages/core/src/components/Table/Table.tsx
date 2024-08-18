import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import Box from '../Box/Box'

interface ModTableProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const StyledBox = styled(Box)`
    overflow-x: auto;
`

const ModTable = styled.table<ModTableProps>`
    width: 100%;
    display: table;
    border-collapse: collapse;
`

const Table = (
    { children, ...props }: ModTableProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <StyledBox>
            <ModTable {...props} ref={ref} data-test="table">
                {children}
            </ModTable>
        </StyledBox>
    )
}

export default withSystemProps(forwardRef(Table))
