import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { CloseIcon, MenuIcon } from '@modjs/icons'
import Accordion from '../Accordion/Accordion'
import AccordionTitle from '../AccordionTitle/AccordionTitle'
import AccordionContent from '../AccordionContent/AccordionContent'
import Button from '../Button/Button'
import Drawer from './Drawer'
import DrawerContent from '../DrawerContent/DrawerContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Drawer>', () => {
    context('Render', () => {
        it('should render default Drawer component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer>
                            <DrawerContent
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
            cy.get('[data-test="drawer"]').should('exist')
            cy.get('[data-testid="default-toggle-open-drawer"]').should('exist')
            cy.get('[data-testid="default-toggle-close-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-open-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-close-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="drawer-overlay"]')
                .should('exist')
                .and('have.css', 'opacity', '0')
                .and('have.css', 'pointer-events', 'none')
        })
        it('should render custom Drawer component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer
                            toggleOpen={
                                <Button variant="outlined">
                                    Open Drawer
                                    <MenuIcon />
                                </Button>
                            }
                            toggleClose={
                                <Button variant="outlined">
                                    CloseDrawer
                                    <CloseIcon />
                                </Button>
                            }
                        >
                            <DrawerContent
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
            cy.get('[data-test="drawer"]').should('exist')
            cy.get('[data-testid="default-toggle-open-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="default-toggle-close-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-open-drawer"]').should('exist')
            cy.get('[data-testid="custom-toggle-close-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="drawer-overlay"]')
                .should('exist')
                .and('have.css', 'opacity', '0')
                .and('have.css', 'pointer-events', 'none')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Drawer
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <DrawerContent
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
            cy.get('[data-test="drawer"]').should('have.attr', 'class')
            cy.get('[data-test="drawer"]').should('have.attr', 'style')
            cy.get('[data-test="drawer"]').should('have.attr', 'data-test')
            cy.get('[data-test="drawer"]').should('not.have.attr', 'm')
            cy.get('[data-test="drawer"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Drawer m={32} p={32}>
                            <DrawerContent
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
            cy.get('[data-test="drawer"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledDrawer = styled(Drawer)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledDrawer>
                            <DrawerContent
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
                        </StyledDrawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer style={{ margin: '32px', padding: '32px' }}>
                            <DrawerContent
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
            cy.get('[data-test="drawer"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Drawer className="test">
                            <DrawerContent
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
            cy.get('[data-test="drawer"]')
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
            cy.get('[data-testid="default-toggle-close-drawer"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="drawer-overlay"]')
                .should('exist')
                .and('have.css', 'pointer-events', 'auto')
                .and('have.css', 'opacity', '0.3')
        })
    })
    context('Integrations', () => {
        it('should integrate well with Drawer and other components', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
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
                                    Drawer Content Lorem Ipsum is simply dummy
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
                            </DrawerContent>
                        </Drawer>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="drawer"]').should('exist')
            cy.get('[data-test="drawer-content"]').should('exist')
            cy.get('[data-testid="default-toggle-open-drawer"]').click()
            cy.get('[data-testid="default-toggle-close-drawer"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-open-drawer"]').should(
                'not.exist',
            )
            cy.get('[data-testid="drawer-overlay"]')
                .should('exist')
                .and('have.css', 'pointer-events', 'auto')
                .and('have.css', 'opacity', '0.3')
        })
    })
})
