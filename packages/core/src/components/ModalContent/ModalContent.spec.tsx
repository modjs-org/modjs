import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { CloseIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import ModalContent from './ModalContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<ModalContent>', () => {
    context('Render', () => {
        it('should render default ModalContent component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent>
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
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')

            cy.get('[data-testid="default-toggle-close-ModalContent"]').should(
                'exist',
            )
            cy.get('[data-testid="custom-toggle-close-ModalContent"]').should(
                'not.exist',
            )
        })
        it('should render custom ModalContent component', () => {
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
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')

            cy.get('[data-testid="default-toggle-close-ModalContent"]').should(
                'exist',
            )
            cy.get('[data-testid="custom-toggle-close-ModalContent"]').should(
                'not.exist',
            )
            cy.get('[data-testid="default-toggle-open-Modal"]').click()
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'height', '420px')
                .and('have.css', 'width', '615.1953125px')
        })
        it('should render notched ModalContent component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                notched={true}
                                toggleClose={
                                    <Button variant="outlined">
                                        Close Modal
                                        <CloseIcon />
                                    </Button>
                                }
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
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
            cy.get('[data-testid="custom-toggle-close-ModalContent"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-close-ModalContent"]').should(
                'not.exist',
            )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
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
            cy.get('[data-test="Modal-content"]').and('have.attr', 'class')
            cy.get('[data-test="Modal-content"]').should('have.attr', 'style')
            cy.get('[data-test="Modal-content"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="Modal-content"]').should('not.have.attr', 'm')
            cy.get('[data-test="Modal-content"]').should('not.have.attr', 'p')
            cy.get('[data-test="Modal-content"]').should(
                'not.have.attr',
                'isopen',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                m={32}
                                p={32}
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
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledModalContent = styled(ModalContent)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal>
                            <StyledModalContent
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
                            </StyledModalContent>
                        </Modal>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                style={{ margin: '32px', padding: '32px' }}
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
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Modal>
                            <ModalContent
                                className="test"
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
            cy.get('[data-test="Modal-content"]')
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
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
            cy.get('[data-testid="default-toggle-close-ModalContent"]').click()
            cy.get('[data-test="Modal-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
        })
    })
})
