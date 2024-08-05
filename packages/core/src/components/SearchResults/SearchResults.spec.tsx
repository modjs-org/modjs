import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import SearchResults from './SearchResults'
import SearchField from '../SearchField/SearchField'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'
import Box from '../Box/Box'
import Link from '../Link/Link'

describe('<SearchResults>', () => {
    context('Render', () => {
        it('should render SearchResults with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField variant="filled">
                            <SearchResults
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
            cy.get('[data-test="search-field"]').click()
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
                .and('have.css', 'border', '1px solid rgb(71, 71, 71)')
        })
        it('should render notched SearchResults', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField variant="filled">
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
            cy.get('[data-test="search-field"]').click()
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
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
                        <SearchField variant="filled">
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
            cy.get('[data-test="search-results"]').should(
                'not.have.attr',
                'notched',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField variant="filled">
                            <SearchResults
                                m={32}
                                p={32}
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
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledSearchResults = styled(SearchResults)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField>
                            <StyledSearchResults
                                m={32}
                                p={32}
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
                            </StyledSearchResults>
                        </SearchField>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField>
                            <SearchResults
                                p={0}
                                m={0}
                                style={{ margin: '32px', padding: '32px' }}
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
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <SearchField>
                            <SearchResults
                                className="test"
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
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should open search results when searchfield is on focus or typing', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <SearchField>
                            <SearchResults
                                notched={false}
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
            cy.get('[data-test="search-field"]').should('exist').click()
            cy.get('[data-test="search-field-wrapper"]').should('exist')
            cy.get('[data-test="search-results"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
        })
    })
})
