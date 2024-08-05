import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import { CloseIcon, MenuIcon } from '@modjs/icons'
import '../../../cypress/fixtures/style.css'
import Accordion from '../Accordion/Accordion'
import AccordionTitle from '../AccordionTitle/AccordionTitle'
import AccordionContent from '../AccordionContent/AccordionContent'
import Button from '../Button/Button'
import Dropdown from './Dropdown'
import DropdownContent from '../DropdownContent/DropdownContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<Dropdown>', () => {
    context('Render', () => {
        it('should render default Dropdown component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]').should('exist')
            cy.get('[data-testid="default-toggle-open-dropdown"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-close-dropdown"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-open-dropdown"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-close-dropdown"]').should(
                'not.exist',
            )
        })
        it('should render custom Dropdown component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown
                            toggleOpen={
                                <Button variant="outlined">
                                    Open Dropdown
                                    <MenuIcon />
                                </Button>
                            }
                            toggleClose={
                                <Button variant="outlined">
                                    CloseDropdown
                                    <CloseIcon />
                                </Button>
                            }
                        >
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]').should('exist')
            cy.get('[data-testid="default-toggle-open-dropdown"]').should(
                'not.exist',
            )
            cy.get('[data-testid="default-toggle-close-dropdown"]').should(
                'not.exist',
            )
            cy.get('[data-testid="custom-toggle-open-dropdown"]').should(
                'exist',
            )
            cy.get('[data-testid="custom-toggle-close-dropdown"]').should(
                'not.exist',
            )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Dropdown
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]').should('have.attr', 'class')
            cy.get('[data-test="dropdown"]').should('have.attr', 'style')
            cy.get('[data-test="dropdown"]').should('have.attr', 'data-test')
            cy.get('[data-test="dropdown"]').should('not.have.attr', 'm')
            cy.get('[data-test="dropdown"]').should('not.have.attr', 'p')
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Dropdown m={32} p={32}>
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledDropdown = styled(Dropdown)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledDropdown>
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DropdownContent>
                        </StyledDropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown style={{ margin: '32px', padding: '32px' }}>
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown className="test">
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should toggle Dropdown', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="default-toggle-open-dropdown"]').click()
            cy.get('[data-testid="default-toggle-close-dropdown"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-open-dropdown"]').should(
                'not.exist',
            )
        })
    })
    context('Integrations', () => {
        it('should integrate well with Dropdown and other components', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content Lorem Ipsum is simply dummy
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
                            </DropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown"]').should('exist')
            cy.get('[data-test="dropdown-content"]').should('exist')
            cy.get('[data-testid="default-toggle-open-dropdown"]').click()
            cy.get('[data-testid="default-toggle-close-dropdown"]').should(
                'exist',
            )
            cy.get('[data-testid="default-toggle-open-dropdown"]').should(
                'not.exist',
            )
        })
    })
})
