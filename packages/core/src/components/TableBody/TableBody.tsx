import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModTableBodyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModTableBody = styled.tbody<ModTableBodyProps>``

const TableBody = (
    { children, ...props }: ModTableBodyProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModTableBody {...props} ref={ref} data-test="tableBody">
            {children}
        </ModTableBody>
    )
}

export default withSystemProps(forwardRef(TableBody))
