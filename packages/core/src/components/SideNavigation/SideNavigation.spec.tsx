import React from 'react'
import { styled } from 'styled-components'
import '../../../cypress/fixtures/style.css'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import Accordion from '../Accordion/Accordion'
import AccordionTitle from '../AccordionTitle/AccordionTitle'
import SideNavigation from './SideNavigation'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<SideNavigation>', () => {
    context('Render', () => {
        it('should render default SideNavigation component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SideNavigation>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                        </SideNavigation>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="side-navigation"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SideNavigation
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                        </SideNavigation>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="side-navigation"]').should('have.attr', 'class')
            cy.get('[data-test="side-navigation"]').should('have.attr', 'style')
            cy.get('[data-test="side-navigation"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="side-navigation"]').should('not.have.attr', 'm')
            cy.get('[data-test="side-navigation"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SideNavigation m={32} p={32}>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                        </SideNavigation>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="side-navigation"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSideNavigation = styled(SideNavigation)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledSideNavigation>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                        </StyledSideNavigation>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="side-navigation"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SideNavigation
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                        </SideNavigation>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="side-navigation"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SideNavigation className="test">
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                            <Accordion variant="filled">
                                <AccordionTitle>
                                    <Typography variant="h3">
                                        Accordion Title
                                    </Typography>
                                </AccordionTitle>
                            </Accordion>
                        </SideNavigation>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="side-navigation"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
