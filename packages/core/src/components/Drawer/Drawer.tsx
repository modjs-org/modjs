import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { CloseIcon, MenuIcon } from '@modjs/icons'
import DrawerContext from '../../context/DrawerContext/DrawerContext'
import Button from '../Button/Button'

interface ModDrawerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    toggleOpen?: React.ReactNode
    toggleClose?: React.ReactNode
}

const forwardProps = (prop: string) => !['isOpen'].includes(prop)

const ToggleDrawerWrapper = styled.div<ModDrawerProps>`
    width: fit-content;
`

const ModDrawer = styled.div<ModDrawerProps>``

const ModDrawerOverlay = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    z-index: 0;
    background-color: ${props => props.theme.color.dark};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    opacity: ${props => (props.isOpen ? 0.3 : 0)};
    transition: opacity 0.3s ease-out;
`

const Drawer = (
    { children, toggleOpen, toggleClose, ...props }: ModDrawerProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const value = {
        isOpen,
        toggleDrawer,
    }

    return (
        <DrawerContext.Provider value={value}>
            <ModDrawer {...props} ref={ref} data-test="drawer">
                {isOpen ? (
                    toggleClose ? (
                        <ToggleDrawerWrapper
                            onClick={toggleDrawer}
                            data-testid="custom-toggle-close-drawer"
                        >
                            {toggleClose}
                        </ToggleDrawerWrapper>
                    ) : (
                        <Button
                            variant="icon"
                            onClick={toggleDrawer}
                            data-testid="default-toggle-close-drawer"
                        >
                            <CloseIcon />
                        </Button>
                    )
                ) : toggleOpen ? (
                    <ToggleDrawerWrapper
                        onClick={toggleDrawer}
                        data-testid="custom-toggle-open-drawer"
                    >
                        {toggleOpen}
                    </ToggleDrawerWrapper>
                ) : (
                    <Button
                        variant="icon"
                        onClick={toggleDrawer}
                        data-testid="default-toggle-open-drawer"
                    >
                        <MenuIcon />
                    </Button>
                )}

                <ModDrawerOverlay
                    isOpen={isOpen}
                    onClick={toggleDrawer}
                    data-testid="drawer-overlay"
                />
                {children}
            </ModDrawer>
        </DrawerContext.Provider>
    )
}

export default withSystemProps(forwardRef(Drawer))
