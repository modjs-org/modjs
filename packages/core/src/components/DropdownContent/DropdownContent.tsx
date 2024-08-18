import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import Box from '../Box/Box'
import DropdownContext from '../../context/DropdownContext/DropdownContext'

interface ModDropdownContentProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    notched?: boolean
    isOpen?: boolean
}

const forwardProps = (prop: string) => !['isOpen', 'notched'].includes(prop)

const ModDropdownContent = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModDropdownContentProps>`
    position: fixed;
    z-index: 1;
    box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.75);
    overflow: auto;
    max-height: ${props => (props.isOpen ? '100vh' : '0')};
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.scrollbarColor};
    background-color: ${props => props.theme.mode};
    border: ${props =>
        !props.notched &&
        props.isOpen &&
        `1px solid ${props.theme.color.dark}`};
    border-radius: ${props => props.isOpen && props.theme.borderRadius};
    ${props =>
        props.notched &&
        `
            clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
            &:before { 
                content: '';
                background: ${props.theme.color.dark};
                clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            };
    `}
`
const DropdownContent = (
    { children, notched, ...props }: ModDropdownContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen } = useContext(DropdownContext)
    return (
        <ModDropdownContent
            {...props}
            ref={ref}
            isOpen={isOpen}
            notched={notched === true ? true : false}
            data-test="dropdown-content"
        >
            <Box px={8}>{children}</Box>
        </ModDropdownContent>
    )
}

export default withSystemProps(forwardRef(DropdownContent))
