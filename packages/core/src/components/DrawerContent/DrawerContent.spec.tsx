import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { CloseIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Button from '../Button/Button'
import Drawer from '../Drawer/Drawer'
import DrawerContent from './DrawerContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<DrawerContent>', () => {
    context('Render', () => {
        it('should render default DrawerContent component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent>
                                <Typography variant="body1">
                                    Drawer Content: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
                .and('have.css', 'left', '-769px')
            cy.get('[data-testid="default-toggle-close-drawerContent"]').should(
                'exist',
            )
            cy.get('[data-testid="custom-toggle-close-drawerContent"]').should(
                'not.exist',
            )
        })
        it('should render custom DrawerContent component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                toggleClose={
                                    <Button variant="outlined">
                                        Close Drawer
                                        <CloseIcon />
                                    </Button>
                                }
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
                .and('have.css', 'left', '-769px')
            cy.get('[data-testid="custom-toggle-close-drawerContent"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-close-drawerContent"]').should(
                'not.exist',
            )
        })
        it('should display drawer to the top', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                displayPosition="top"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').click()
            cy.get('[data-test = "drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
                .and('have.css', 'top', '0px')
        })
        it('should display drawer to the right', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                displayPosition="right"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').click()
            cy.get('[data-test = "drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
                .and('have.css', 'right', '0px')
        })
        it('should display drawer to the bottom', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                displayPosition="bottom"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').click()
            cy.get('[data-test = "drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
                .and('have.css', 'bottom', '0px')
        })
        it('should display drawer to the left', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                displayPosition="left"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').click()
            cy.get('[data-test = "drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
                .and('have.css', 'left', '0px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]').and('have.attr', 'class')
            cy.get('[data-test="drawer-content"]').should('have.attr', 'style')
            cy.get('[data-test="drawer-content"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="drawer-content"]').should('not.have.attr', 'm')
            cy.get('[data-test="drawer-content"]').should('not.have.attr', 'p')
            cy.get('[data-test="drawer-content"]').should(
                'not.have.attr',
                'isopen',
            )
            cy.get('[data-test="drawer-content"]').should(
                'not.have.attr',
                'disabletransition',
            )
            cy.get('[data-test="drawer-content"]').should(
                'not.have.attr',
                'displayposition',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                m={32}
                                p={32}
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledDrawerContent = styled(DrawerContent)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <StyledDrawerContent
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </StyledDrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                style={{ margin: '32px', padding: '32px' }}
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                className="test"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should toggle drawer', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
                                displayPosition="right"
                                title={
                                    <Typography variant="h3">
                                        Drawer Title
                                    </Typography>
                                }
                            >
                                <Typography variant="body1">
                                    Drawer Content:: Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').click()
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
                .and('have.css', 'right', '0px')
            cy.get('[data-testid="default-toggle-close-drawerContent"]').click()
            cy.get('[data-test="drawer-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
                .and('have.css', 'right', '-769px')
        })
    })
})
