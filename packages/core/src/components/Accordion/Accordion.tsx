import React, { useState, forwardRef, useEffect } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import AccordionContext from '../../context/AccordionContext/AccordionContext'

interface ModAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean
    defaultOpen?: boolean //can be supplied by user to check for window.location.pathname
}

const forwardProps = (prop: string) =>
    !['variant', 'notched', 'defaultOpen'].includes(prop)

const ModAccordion = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModAccordionProps>`
    position: relative;
    overflow: hidden;
    ${props =>
        props.variant === 'filled' &&
        `
            background-color: ${props.theme.color.light};
            margin: 8px 0px 8px 0px;
            padding: 4px 8px 4px 8px;
    `};
    ${props =>
        props.variant === 'outlined' &&
        `
            background-color: ${props.theme.mode};
            margin: 8px 0px 8px 0px;
            padding: 4px 8px 4px 8px;
    `};
    ${props =>
        props.variant === 'transparent' &&
        `
            background-color: ${props.theme.mode};
            margin: 4px 0px 4px 0px;
            padding: 0px;
    `};
    ${props =>
        ((!props.notched && props.variant === 'filled') ||
            (!props.notched && props.variant === 'outlined')) &&
        `
            border: ${props.theme.border.dark};
            border-radius: ${props.theme.borderRadius};
    `};
    ${props =>
        ((props.notched && props.variant === 'filled') ||
            (props.notched && props.variant === 'outlined')) &&
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
    `};
`

const Accordion = (
    { children, variant, notched, defaultOpen, ...props }: ModAccordionProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(defaultOpen || false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    const value = {
        isOpen,
        toggleAccordion,
    }

    useEffect(() => {
        setIsOpen(defaultOpen || false)
    }, [defaultOpen])

    return (
        <AccordionContext.Provider value={value}>
            <ModAccordion
                {...props}
                ref={ref}
                variant={variant ? variant : 'filled'}
                notched={notched === true ? true : false}
                defaultOpen={defaultOpen === true ? true : false}
                data-test="accordion"
            >
                {children}
            </ModAccordion>
        </AccordionContext.Provider>
    )
}

export default withSystemProps(forwardRef(Accordion))
