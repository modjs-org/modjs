import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { CloseIcon, MenuIcon } from '@modjs/icons'
import ModalContext from '../../context/ModalContext/ModalContext'
import Button from '../Button/Button'

interface ModModalProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    toggleOpen?: React.ReactNode
    toggleClose?: React.ReactNode
}

const forwardProps = (prop: string) => !['isOpen'].includes(prop)

const ToggleModalWrapper = styled.div`
    width: fit-content;
`

const ModModal = styled.div<ModModalProps>``

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

const Modal = (
    { children, toggleOpen, toggleClose, ...props }: ModModalProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const value = {
        isOpen,
        toggleModal,
    }

    return (
        <ModalContext.Provider value={value}>
            <ModModal {...props} ref={ref} data-test="Modal">
                {isOpen ? (
                    toggleClose ? (
                        <ToggleModalWrapper
                            onClick={toggleModal}
                            data-testid="custom-toggle-close-Modal"
                        >
                            {toggleClose}
                        </ToggleModalWrapper>
                    ) : (
                        <Button
                            variant="icon"
                            onClick={toggleModal}
                            data-testid="default-toggle-close-Modal"
                        >
                            <CloseIcon />
                        </Button>
                    )
                ) : toggleOpen ? (
                    <ToggleModalWrapper
                        onClick={toggleModal}
                        data-testid="custom-toggle-open-Modal"
                    >
                        {toggleOpen}
                    </ToggleModalWrapper>
                ) : (
                    <Button
                        variant="icon"
                        onClick={toggleModal}
                        data-testid="default-toggle-open-Modal"
                    >
                        <MenuIcon />
                    </Button>
                )}
                <ModDrawerOverlay
                    isOpen={isOpen}
                    onClick={toggleModal}
                    data-testid="drawer-overlay"
                />
                {children}
            </ModModal>
        </ModalContext.Provider>
    )
}

export default withSystemProps(forwardRef(Modal))
