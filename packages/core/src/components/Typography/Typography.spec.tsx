import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import Typography from './Typography'
import Layout from '../Layout/Layout'

describe('<Typography>', () => {
    context('Render', () => {
        it('should render Typography component with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </ModThemeProvider>,
            )
            cy.get('p').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Typography
                            variant="body1"
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]').should('have.attr', 'class')
            cy.get('[data-test="typography"]').should('have.attr', 'style')
            cy.get('[data-test="typography"]').should('have.attr', 'data-test')
            cy.get('[data-test="typography"]').should('not.have.attr', 'm')
            cy.get('[data-test="typography"]').should('not.have.attr', 'p')
            cy.get('[data-test="typography"]').should(
                'not.have.attr',
                'variant',
            )
        })
    })
    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Typography variant="h1" p={32} m={32}>
                            Typography H1
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
                .and('have.css', 'padding', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledH2 = styled(Typography)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledH2 variant="h2">Styled Typography H2</StyledH2>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Typography
                            variant="h3"
                            style={{ margin: '32px', padding: '32px' }}
                        >
                            Typography H3
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Typography variant="body1" className="test">
                            Typography body
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="typography"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })

    context('Integrations', () => {
        it('should integrate well with all other Typography components', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Typography variant="h1">Typography H1</Typography>
                        <Typography variant="body1">
                            Typography body1: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="h2">Typography H2</Typography>
                        <Typography variant="body2">
                            Typography body2: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="h3">Typography H3</Typography>
                        <Typography variant="small">
                            Typography small: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="h4">Typography H4</Typography>
                        <Typography variant="b">
                            Typography bold: Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="h5">Typography H5</Typography>
                        <Typography variant="strong">
                            Typography strong: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="h6">Typography H6</Typography>
                        <Typography variant="i">
                            Typography italic: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="em">
                            Typography emphasized: Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="mark">
                            Typography mark: Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="del">
                            Typography delete: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="ins">
                            Typography insert: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="sub">
                            Typography subscript: Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                        <Typography variant="sup">
                            Typography superscript: Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Typography>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('h1').should('exist')
            cy.get('h2').should('exist')
            cy.get('h3').should('exist')
            cy.get('h4').should('exist')
            cy.get('h5').should('exist')
            cy.get('h6').should('exist')
            cy.get('p').should('exist')
            cy.get('small').should('exist')
            cy.get('b').should('exist')
            cy.get('strong').should('exist')
            cy.get('i').should('exist')
            cy.get('em').should('exist')
            cy.get('mark').should('exist')
            cy.get('del').should('exist')
            cy.get('ins').should('exist')
            cy.get('sub').should('exist')
            cy.get('sup').should('exist')
        })
    })
})
