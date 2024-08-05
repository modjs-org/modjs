import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { CloseIcon, MenuIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Accordion from '../Accordion/Accordion'
import AccordionTitle from '../AccordionTitle/AccordionTitle'
import AccordionContent from '../AccordionContent/AccordionContent'
import Button from '../Button/Button'
import Modal from './Modal'
import ModalContent from '../ModalContent/ModalContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Modal>', () => {
    context('Render', () => {
        it('should render default Modal component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]').should('exist')
            cy.get('[data-testid="default-toggle-open-Modal"]').should('exist')
            cy.get('[data-testid="default-toggle-close-Modal"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-open-Modal"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-close-Modal"]').should(
                'not.exist',
            )
        })
        it('should render custom Modal component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal
                            toggleOpen={
                                <Button variant="outlined">
                                    Open Modal
                                    <MenuIcon />
                                </Button>
                            }
                            toggleClose={
                                <Button variant="outlined">
                                    Close Modal
                                    <CloseIcon />
                                </Button>
                            }
                        >
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]').should('exist')
            cy.get('[data-testid="default-toggle-open-Modal"]').should(
                'not.exist',
            )
            cy.get('[data-testid="default-toggle-close-Modal"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-open-Modal"]').should('exist')
            cy.get('[data-testid="custom-toggle-close-Modal"]').should(
                'not.exist',
            )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Modal
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]').should('have.attr', 'class')
            cy.get('[data-test="Modal"]').should('have.attr', 'style')
            cy.get('[data-test="Modal"]').should('have.attr', 'data-test')
            cy.get('[data-test="Modal"]').should('not.have.attr', 'm')
            cy.get('[data-test="Modal"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Modal m={32} p={32}>
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledModal = styled(Modal)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledModal>
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </ModalContent>
                        </StyledModal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal style={{ margin: '32px', padding: '32px' }}>
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal className="test">
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should toggle Modal', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-Modal"]').click()
            cy.get('[data-testid="default-toggle-close-Modal"]').should('exist')
            cy.get('[data-testid="default-toggle-open-Modal"]').should(
                'not.exist',
            )
        })
    })
    context('Integrations', () => {
        it('should integrate well with Modal and other components', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                title={
                                    <Typography variant="h3">
                                        Modal Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Modal Content Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry.
                                </Typography>
                                <Accordion>
                                    <AccordionTitle>
                                        <Typography variant="h3">
                                            Default Accordion Title
                                        </Typography>
                                    </AccordionTitle>
                                    <AccordionContent>
                                        <Typography variant="body1">
                                            Default Accordion Content
                                        </Typography>
                                        <Typography variant="body1">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                        </Typography>
                                    </AccordionContent>
                                </Accordion>
                                <Accordion>
                                    <AccordionTitle>
                                        <Typography variant="h3">
                                            Default Accordion Title
                                        </Typography>
                                    </AccordionTitle>
                                    <AccordionContent>
                                        <Typography variant="body1">
                                            Default Accordion Content
                                        </Typography>
                                        <Typography variant="body1">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                        </Typography>
                                    </AccordionContent>
                                </Accordion>
                            </ModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal"]').should('exist')
            cy.get('[data-test="Modal-content"]').should('exist')
            cy.get('[data-testid="default-toggle-open-Modal"]').click()
            cy.get('[data-testid="default-toggle-close-Modal"]').should('exist')
            cy.get('[data-testid="default-toggle-open-Modal"]').should(
                'not.exist',
            )
        })
    })
})
