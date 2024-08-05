import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    ref?: React.Ref<HTMLElement>
    brightness?: 'light' | 'normal' | 'dark' | 'none'
    size?: 'sm' | 'md' | 'lg'
}

const forwardProps = (prop: string) => !['brightness', 'size'].includes(prop)

const ModAvatar = styled.img.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModAvatarProps>`
    ${props =>
        props.size === 'sm' &&
        `
        height: ${props.theme.avatar.height.sm};
        width: ${props.theme.avatar.height.sm};
    `};
    ${props =>
        props.size === 'md' &&
        `
        height: ${props.theme.avatar.height.md};
        width: ${props.theme.avatar.height.md};
    `};
    ${props =>
        props.size === 'lg' &&
        `
        height: ${props.theme.avatar.height.lg};
        width: ${props.theme.avatar.height.lg};
    `};
    ${props =>
        props.brightness === 'light' &&
        `
        filter: ${props.theme.avatar.brightness.light};
    `};
    ${props =>
        props.brightness === 'normal' &&
        `
        filter: ${props.theme.avatar.brightness.normal};
    `};
    ${props =>
        props.brightness === 'dark' &&
        `
        filter: ${props.theme.avatar.brightness.dark};
    `};
    ${props =>
        props.brightness === 'none' &&
        `
        filter: none;
    `};
    && {
        border-radius: 100%;
    }
`

const Avatar = (
    { brightness, size, ...props }: ModAvatarProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModAvatar
            {...props}
            ref={ref}
            brightness={brightness ? brightness : 'light'}
            size={size ? size : 'md'}
            data-test="avatar"
        />
    )
}

export default withSystemProps(forwardRef(Avatar))
