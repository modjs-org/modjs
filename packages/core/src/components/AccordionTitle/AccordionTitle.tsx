import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { DownChevronIcon, RightChevronIcon } from '@modjs/icons'
import AccordionContext from '../../context/AccordionContext/AccordionContext'

interface ModAccordionTitleProps
    extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const ModAccordionTitle = styled.div<ModAccordionTitleProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    &:hover {
        cursor: pointer;
    }
`

const AccordionTitle = (
    { children, ...props }: ModAccordionTitleProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen, toggleAccordion } = useContext(AccordionContext)

    return (
        <ModAccordionTitle
            {...props}
            ref={ref}
            onClick={toggleAccordion}
            data-test="accordion-title"
        >
            {children}
            {isOpen ? <DownChevronIcon /> : <RightChevronIcon />}
        </ModAccordionTitle>
    )
}

export default withSystemProps(forwardRef(AccordionTitle))
