import React, { useContext, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { CloseIcon } from '@modjs/icons'
import Box from '../Box/Box'
import Button from '../Button/Button'
import Container from '../Container/Container'
import ModalContext from '../../context/ModalContext/ModalContext'

interface ModModalContentProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
    notched?: boolean
    isOpen?: boolean
    title?: React.ReactNode
    toggleClose?: React.ReactNode
}

const forwardProps = (prop: string) => !['isOpen', 'notched'].includes(prop)

const ModModalContent = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModModalContentProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    height: 70vh;
    width: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.75);
    overflow: auto;
    max-height: ${props => (props.isOpen ? '100vh' : '0')};
    max-width: 1080px;
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

    @media (0px <= width <= 768px) {
        width: 95%;
    }
    @media (769px <= width <= 1280px) {
        width: 80%;
    }
`
const ModalContent = (
    { children, notched, title, toggleClose, ...props }: ModModalContentProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const { isOpen, toggleModal } = useContext(ModalContext)
    return (
        <ModModalContent
            {...props}
            ref={ref}
            isOpen={isOpen}
            notched={notched === true ? true : false}
            data-test="Modal-content"
        >
            <Container fluid={true}>
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
                            onClick={toggleModal}
                            data-testid="custom-toggle-close-ModalContent"
                        >
                            {toggleClose}
                        </Box>
                    ) : (
                        <Button
                            variant="transparent"
                            onClick={toggleModal}
                            data-testid="default-toggle-close-ModalContent"
                        >
                            <CloseIcon />
                        </Button>
                    )}
                </Box>
                <Box px={8}>{children}</Box>
            </Container>
        </ModModalContent>
    )
}

export default withSystemProps(forwardRef(ModalContent))
