import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import AccordionContext from '../../context/AccordionContext/AccordionContext'

interface ModAccordionContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    isOpen?: boolean
}

const forwardProps = (prop: string) => !['isOpen', 'open'].includes(prop)

const ModAccordionContent = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModAccordionContentProps>`
    overflow: auto;
    max-height: ${props => (props.isOpen ? '100vh' : '0')};
    transition: max-height 0.3s ease-out;
    scrollbar-width: none;
`

const AccordionContent = (
    { children, ...props }: ModAccordionContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen } = useContext(AccordionContext)

    return (
        <ModAccordionContent
            {...props}
            ref={ref}
            isOpen={isOpen}
            data-test="accordion-content"
        >
            {children}
        </ModAccordionContent>
    )
}

export default withSystemProps(forwardRef(AccordionContent))
