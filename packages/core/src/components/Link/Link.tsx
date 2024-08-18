import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'

interface ModLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
    variant?: 'filled' | 'outlined' | 'transparent' | 'icon' | 'inline'
    active?: boolean
    notched?: boolean
}

const forwardProps = (prop: string) =>
    !['variant', 'notched', 'active'].includes(prop)

const ModLink = styled.a.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModLinkProps>`
    width: fit-content;
    max-width: fit-content;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    border: none;
    font-family: ${props => props.theme.typography.ff.primary};
    ${props =>
        props.variant === 'filled' &&
        `
        text-transform: uppercase;
        padding: 10px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: left;
        border-radius: ${props.theme.borderRadius};
        background-color: ${props.theme.color.primary};
        color: ${props.theme.typography.color.white};
        font-size: ${props.theme.typography.fs.xsm};
        font-weight: ${props.theme.typography.fw.medium};

    `}
    ${props =>
        props.variant === 'outlined' &&
        `
        padding: 12px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background-color: ${props.theme.color.transparent};
        color: ${props.theme.typography.color.primary};
        font-weight: ${props.theme.typography.fw.medium};
        font-size: ${props.theme.typography.fs.xsm};
  
    `}
    ${props =>
        props.variant === 'transparent' &&
        `
        width: 100%;
        max-width: 100%;
        padding: 8px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: left;
        background-color: ${props.theme.color.transparent};
        color: ${props.theme.typography.color.primary};
        font-weight: ${props.theme.typography.fw.medium};
        font-size: ${props.theme.typography.fs.sm};
        &:hover {
            background-color: ${props.theme.color.light};
            color: ${props.theme.color.primary};
            border-radius: ${props.theme.borderRadius};    
        };

    `}
    ${props =>
        props.variant === 'transparent' &&
        props.active &&
        `
            background-color: ${props.theme.color.light};
            color: ${props.theme.color.primary};
    `};
    ${props =>
        props.variant === 'icon' &&
        `
            text-transform: none;
            padding: 10px;
            border-radius: ${props.theme.borderRadius};
            display: flex;
            gap: 4px;
            align-items: center;
            justify-content: left;
            background-color: ${props.theme.color.transparent};
            border: 1px solid ${props.theme.color.dark};
            color: ${props.theme.typography.color.primary};
            font-weight: ${props.theme.typography.fw.medium};
            font-size: ${props.theme.typography.fs.sm};
    `}
    ${props =>
        props.variant === 'inline' &&
        `
        padding: 0px 4px 0px 4px;
        text-transform: none;
        background-color: ${props.theme.color.transparent};
        color: ${props.theme.color.primary};
        font-weight: ${props.theme.typography.fw.semibold};
        font-size: ${props.theme.typography.fs.md};
    `}

    ${props =>
        props.variant === 'filled' &&
        props.notched &&
        `
        border-radius: 0px;
        clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `}

    ${props =>
        props.variant === 'outlined' &&
        !props.notched &&
        `
        border-radius: ${props.theme.borderRadius};
        border: 1px solid ${props.theme.color.primary};
    `};
    ${props =>
        props.variant === 'outlined' &&
        props.notched &&
        `
        &::before {
        content: '';
        background-color: ${props.theme.color.primary};
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: none;
        left: none;
        width: 100%;
        height: 100%;
        }
  `};
    &:hover {
        opacity: ${props => props.theme.opacity.low};
        cursor: pointer;
    }
`
const Link = (
    {
        children,
        startAdornment,
        endAdornment,
        variant,
        notched,
        active,
        ...props
    }: ModLinkProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModLink
            variant={variant ? variant : 'filled'}
            notched={notched === true ? true : false}
            active={active === true ? true : false}
            {...props}
            ref={ref}
            data-test="link"
        >
            {startAdornment}
            {children}
            {endAdornment}
        </ModLink>
    )
}

export default withSystemProps(forwardRef(Link))
