import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { CloseIcon } from '@modjs/icons'
import Box from '../Box/Box'
import Button from '../Button/Button'
import SearchContext from '../../context/SearchContext/SearchContext'

interface ModSearchResultsProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>

    notched?: boolean
    isOpen?: boolean
    title?: React.ReactNode
    toggleClose?: React.ReactNode
}

const forwardProps = (prop: string) => !['isOpen', 'notched'].includes(prop)

const ModSearchResults = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSearchResultsProps>`
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.75);
    scrollbar-width: thin;
    max-height: ${props => (props.isOpen ? '100vh' : '0')};
    scrollbar-color: ${props =>
        props.theme.type === 'light' ? 'auto' : '#474747 #000000'};
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
const SearchResults = (
    { children, notched, title, toggleClose, ...props }: ModSearchResultsProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen, toggleSearchResults } = useContext(SearchContext)
    return (
        <ModSearchResults
            {...props}
            ref={ref}
            isOpen={isOpen}
            notched={notched === true ? true : false}
            data-test="search-results"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={16}
                p={8}
            >
                {title}

                {toggleClose ? (
                    <Box
                        onClick={toggleSearchResults}
                        data-testid="custom-toggle-close-SearchResults"
                    >
                        {toggleClose}
                    </Box>
                ) : (
                    <Button
                        variant="transparent"
                        onClick={toggleSearchResults}
                        data-testid="default-toggle-close-SearchResults"
                    >
                        <CloseIcon />
                    </Button>
                )}
            </Box>
            {children}
        </ModSearchResults>
    )
}

export default withSystemProps(forwardRef(SearchResults))
