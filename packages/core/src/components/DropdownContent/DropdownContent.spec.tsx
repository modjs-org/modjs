import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import Dropdown from '../Dropdown/Dropdown'
import DropdownContent from './DropdownContent'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

describe('<DropdownContent>', () => {
    context('Render', () => {
        it('should render default DropdownContent component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
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
            cy.get('[data-test="dropdown-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
        })
        it('should render notched DropdownContent component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent notched={true}>
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
            cy.get('[data-test="dropdown-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
                            >
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
            cy.get('[data-test="dropdown-content"]').and('have.attr', 'class')
            cy.get('[data-test="dropdown-content"]').should(
                'have.attr',
                'style',
            )
            cy.get('[data-test="dropdown-content"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="dropdown-content"]').should(
                'not.have.attr',
                'm',
            )
            cy.get('[data-test="dropdown-content"]').should(
                'not.have.attr',
                'p',
            )
            cy.get('[data-test="dropdown-content"]').should(
                'not.have.attr',
                'isopen',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withLayout HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent m={32} p={32}>
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
            cy.get('[data-test="dropdown-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledDropdownContent = styled(DropdownContent)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <StyledDropdownContent>
                                <Typography variant="body1">
                                    Dropdown Content:: Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since.
                                </Typography>
                            </StyledDropdownContent>
                        </Dropdown>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="dropdown-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent
                                style={{ margin: '32px', padding: '32px' }}
                            >
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
            cy.get('[data-test="dropdown-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Dropdown>
                            <DropdownContent className="test">
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
            cy.get('[data-test="dropdown-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
})
