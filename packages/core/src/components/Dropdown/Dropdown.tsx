import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { CloseIcon, MenuIcon } from '@modjs/icons'
import DropdownContext from '../../context/DropdownContext/DropdownContext'
import Button from '../Button/Button'

interface ModDropdownProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    toggleOpen?: React.ReactNode
    toggleClose?: React.ReactNode
}

const ToggleDropdownWrapper = styled.div<ModDropdownProps>`
    width: fit-content;
`

const forwardProps = (prop: string) => !['isOpen'].includes(prop)

const ModDropdown = styled.div<ModDropdownProps>``

const ModDropdownOverlay = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${props => props.theme.color.dark};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    opacity: 0;
    transition: opacity 0.3s ease-out;
`

const Dropdown = (
    { children, toggleOpen, toggleClose, ...props }: ModDropdownProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const value = {
        isOpen,
        toggleDropdown,
    }

    return (
        <DropdownContext.Provider value={value}>
            <ModDropdown {...props} ref={ref} data-test="dropdown">
                {isOpen ? (
                    toggleClose ? (
                        <ToggleDropdownWrapper
                            onClick={toggleDropdown}
                            data-testid="custom-toggle-close-dropdown"
                        >
                            {toggleClose}
                        </ToggleDropdownWrapper>
                    ) : (
                        <Button
                            variant="icon"
                            onClick={toggleDropdown}
                            data-testid="default-toggle-close-dropdown"
                        >
                            <CloseIcon />
                        </Button>
                    )
                ) : toggleOpen ? (
                    <ToggleDropdownWrapper
                        onClick={toggleDropdown}
                        data-testid="custom-toggle-open-dropdown"
                    >
                        {toggleOpen}
                    </ToggleDropdownWrapper>
                ) : (
                    <Button
                        variant="icon"
                        onClick={toggleDropdown}
                        data-testid="default-toggle-open-dropdown"
                    >
                        <MenuIcon />
                    </Button>
                )}
                <ModDropdownOverlay
                    isOpen={isOpen}
                    onClick={toggleDropdown}
                    data-testid="drawer-overlay"
                />
                {children}
            </ModDropdown>
        </DropdownContext.Provider>
    )
}

export default withSystemProps(forwardRef(Dropdown))
