import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { CloseIcon } from '@modjs/icons'
import Box from '../Box/Box'
import Button from '../Button/Button'
import DrawerContext from '../../context/DrawerContext/DrawerContext'

interface ModDrawerContentProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    isOpen?: boolean
    title?: React.ReactNode
    toggleClose?: React.ReactNode
    displayPosition?: 'right' | 'left' | 'top' | 'bottom'
    disableTransition?: boolean
}

const forwardProps = (prop: string) =>
    !['isOpen', 'displayPosition', 'disableTransition'].includes(prop)

const ModDrawerContent = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModDrawerContentProps>`
    max-height: ${props => (props.isOpen ? '100vh' : '0')};
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.scrollbarColor};
    z-index: 3;
    position: fixed;
    background-color: ${props => props.theme.mode};
    overflow: auto;
    ${props =>
        props.displayPosition === 'top' &&
        `
        border-bottom: ${props.theme.border.dark};
        top: ${props.isOpen ? '0px' : '-100%'};
        transition: ${!props.disableTransition && `top 0.3s ease-out`};
        box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.75);
        right: 0;
        left: 0;
    `};
    ${props =>
        props.displayPosition === 'left' &&
        `
        border-right: ${props.theme.border.dark};
        width: auto;
        // width: max-content;
        left: ${props.isOpen ? '0' : '-100%'};
        transition: ${!props.disableTransition && `left 0.3s ease-out`} ;
        height: 100vh;
        box-shadow: 4px 0px 11px -2px rgba(0, 0, 0, 0.75);
        top: 0;
    `};
    ${props =>
        props.displayPosition === 'right' &&
        `
        border-left: ${props.theme.border.dark};
        width: 300px;
        // width: max-content;
        right: ${props.isOpen ? '0' : '-100%'};
        transition: ${!props.disableTransition && `right 0.3s ease-out`};
        height: 100vh;
        box-shadow: -4px 0px 11px -2px rgba(0, 0, 0, 0.75);
        top: 0;
    `};
    ${props =>
        props.displayPosition === 'bottom' &&
        `
        border-top: ${props.theme.border.dark};
        bottom: ${props.isOpen ? '0' : '-100%'};
        transition: ${!props.disableTransition && `bottom 0.3s ease-out`};
        right: 0;
        left: 0;
        box-shadow: 0px -4px 9px -2px rgba(0, 0, 0, 0.75);
    `};
`
const DrawerContent = (
    {
        children,
        title,
        toggleClose,
        displayPosition,
        disableTransition,
        ...props
    }: ModDrawerContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen, toggleDrawer } = useContext(DrawerContext)
    return (
        <ModDrawerContent
            {...props}
            ref={ref}
            isOpen={isOpen}
            displayPosition={displayPosition ? displayPosition : 'left'}
            disableTransition={disableTransition === true ? true : false}
            data-test="drawer-content"
        >
            <Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={16}
                    mb={0}
                    borderBottom="dark"
                >
                    <Box px={16} py={8}>
                        {title}
                    </Box>
                    {toggleClose ? (
                        <Box
                            onClick={toggleDrawer}
                            data-testid="custom-toggle-close-drawerContent"
                            px={16}
                            py={8}
                        >
                            {toggleClose}
                        </Box>
                    ) : (
                        <Button
                            variant="transparent"
                            onClick={toggleDrawer}
                            data-testid="default-toggle-close-drawerContent"
                            px={16}
                            py={8}
                        >
                            <CloseIcon />
                        </Button>
                    )}
                </Box>
                <Box p={16}>{children}</Box>
            </Box>
        </ModDrawerContent>
    )
}

export default withSystemProps(forwardRef(DrawerContent))
