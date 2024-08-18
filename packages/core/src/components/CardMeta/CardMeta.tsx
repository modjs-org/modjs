import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModCardMetaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModCardMeta = styled.div<ModCardMetaProps>``

const CardMeta = (
    { children, ...props }: ModCardMetaProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCardMeta {...props} ref={ref} data-test="card-meta">
            {children}
        </ModCardMeta>
    )
}

export default withSystemProps(forwardRef(CardMeta))
