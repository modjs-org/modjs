import React, { useEffect, useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModLinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean
    ref?: React.Ref<HTMLElement>
    variant?: 'success' | 'error' | 'default'
}

const forwardProps = (prop: string) => !['isLoading', 'variant'].includes(prop)

const ModLinearProgress = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModLinearProgressProps>`
    display: ${props => (props.isLoading ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props =>
        props.variant === 'success'
            ? props.theme.color.success
            : props.variant === 'error'
              ? props.theme.color.error
              : props.theme.color.primary};
    height: 4px;
`

const LinearProgress = (
    { variant, ...props }: ModLinearProgressProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const finishLoading = () => {
            setLoading(false)
        }

        window.addEventListener('load', finishLoading)

        return () => {
            window.removeEventListener('load', finishLoading)
        }
    }, [])

    return (
        <ModLinearProgress
            isLoading={loading}
            variant={variant ? variant : 'default'}
            {...props}
            ref={ref}
            data-test="linear-progress"
        />
    )
}

export default withSystemProps(forwardRef(LinearProgress))
