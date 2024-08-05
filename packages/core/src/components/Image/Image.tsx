import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModImageProps extends React.HTMLAttributes<HTMLImageElement> {
    notched?: boolean
    ref?: React.Ref<HTMLElement>
    brightness?: 'light' | 'normal' | 'dark' | 'none'
    size?: 'sm' | 'md' | 'lg'
}
const forwardProps = (prop: string) =>
    !['notched', 'brightness', 'size'].includes(prop)

const ModImage = styled.img.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModImageProps>`
    && {
        border-radius: ${props => props.theme.borderRadius};
    }
    ${props =>
        props.size === 'sm' &&
        `
        height: ${props.theme.image.height.sm};
        width: ${props.theme.image.height.sm};
    `};
    ${props =>
        props.size === 'md' &&
        `
        height: ${props.theme.image.height.md};
        width: ${props.theme.image.height.md};
    `};
    ${props =>
        props.size === 'lg' &&
        `
        height: ${props.theme.image.height.lg};
        width: ${props.theme.image.height.lg};
    `};
    ${props =>
        props.brightness === 'light' &&
        `
        filter: ${props.theme.image.brightness.light};
    `};
    ${props =>
        props.brightness === 'normal' &&
        `
        filter: ${props.theme.image.brightness.normal};
    `};
    ${props =>
        props.brightness === 'dark' &&
        `
        filter: ${props.theme.image.brightness.dark};
    `};
    ${props =>
        props.brightness === 'none' &&
        `
        filter: none;
    `};
    ${props =>
        props.notched &&
        `
        clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `};
`

const Image = (
    { notched, brightness, size, ...props }: ModImageProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModImage
            notched={notched === true ? true : false}
            brightness={brightness ? brightness : 'light'}
            size={size ? size : 'md'}
            {...props}
            ref={ref}
            data-test="image"
        />
    )
}

export default withSystemProps(forwardRef(Image))
