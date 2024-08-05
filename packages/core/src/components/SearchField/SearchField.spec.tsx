import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import SearchField from './SearchField'
import Layout from '../Layout/Layout'
import SearchResults from '../SearchResults/SearchResults'
import Typography from '../Typography/Typography'
import Box from '../Box/Box'
import Link from '../Link/Link'

describe('<SearchField>', () => {
    context('Render', () => {
        it('should render SearchField with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '2')
                .should('have.attr', 'maxlength', '64')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Search...')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'search')
                .should('have.attr', 'id', 'search')
                .should('have.attr', 'value', '')
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render SearchField with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField
                            minLength={6}
                            maxLength={12}
                            autoComplete="on"
                            placeholder="Search"
                            type="text"
                            name="search"
                            id="search"
                            variant="outlined"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '12')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Search')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'search')
                .should('have.attr', 'id', 'search')
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($SearchFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $SearchFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled SearchField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField variant="filled" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($SearchFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $SearchFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled SearchField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField variant="filled" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render outlined SearchField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField variant="outlined" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($SearchFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $SearchFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled SearchField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField variant="outlined" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render transparent SearchField', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField variant="transparent" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'border-bottom',
                    '1px solid rgb(194, 194, 194)',
                )
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]').should(
                'have.attr',
                'minLength',
            )
            cy.get('[data-test="search-field"]').should(
                'have.attr',
                'maxLength',
            )
            cy.get('[data-test="search-field"]').should(
                'have.attr',
                'autoComplete',
            )
            cy.get('[data-test="search-field"]').should(
                'have.attr',
                'placeholder',
            )
            cy.get('[data-test="search-field"]').should('have.attr', 'type')
            cy.get('[data-test="search-field"]').should('have.attr', 'name')
            cy.get('[data-test="search-field"]').should('have.attr', 'id')
            cy.get('[data-test="search-field"]').should('have.attr', 'value')
            cy.get('[data-test="search-field"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="search-field"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="search-field"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="search-field"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="search-field"]').should(
                'not.have.attr',
                'notched',
            )

            cy.get('[data-test="search-field-wrapper"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="search-field-wrapper"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="search-field-wrapper"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="search-field-wrapper"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="search-field-wrapper"]').should(
                'not.have.attr',
                'notched',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSearchField = styled(SearchField)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledSearchField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should open search results when on focus or typing', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField variant="filled" notched={false}>
                            <SearchResults
                                notched={true}
                                title={
                                    <Box px={16}>
                                        <Typography variant="h3">
                                            Search Results
                                        </Typography>
                                    </Box>
                                }
                            >
                                <Box px={16} py={8}>
                                    <Link variant="transparent">
                                        Search Results Links
                                    </Link>
                                </Box>
                                <Box px={16} py={8}>
                                    <Link variant="transparent">
                                        Search Results Links
                                    </Link>
                                </Box>
                                <Box px={16} py={8}>
                                    <Link variant="transparent">
                                        Search Results Links
                                    </Link>
                                </Box>
                                <Box px={16} py={8}>
                                    <Link variant="transparent">
                                        Search Results Links
                                    </Link>
                                </Box>
                                <Box px={16} py={8}>
                                    <Link variant="transparent">
                                        Search Results Links
                                    </Link>
                                </Box>
                            </SearchResults>
                        </SearchField>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-field"]').should('exist')
            cy.get('[data-test="search-field-wrapper"]').should('exist')
            cy.get('[data-test="search-results"]').should('exist')
        })
    })
})
