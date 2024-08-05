import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import UrlField from './UrlField'
import Layout from '../Layout/Layout'

describe('<UrlField>', () => {
    context('Render', () => {
        it('should render UrlField with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '3')
                .should('have.attr', 'maxlength', '2048')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Website *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'website')
                .should('have.attr', 'id', 'website')
                .should('have.attr', 'value', '')
            cy.get('[data-test="url-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render UrlField with custom props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField
                            minLength={6}
                            maxLength={12}
                            autoComplete="on"
                            placeholder="Url"
                            type="text"
                            name="url"
                            id="url"
                            variant="outlined"
                            notched={true}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '12')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Url')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'url')
                .should('have.attr', 'id', 'url')
            cy.get('[data-test="url-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($UrlFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $UrlFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled UrlField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField variant="filled" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($UrlFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $UrlFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled UrlField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField variant="filled" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render outlined UrlField with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField variant="outlined" notched={true} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($UrlFieldWrapper => {
                    const beforeEl = window.getComputedStyle(
                        $UrlFieldWrapper[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render filled UrlField without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField variant="outlined" notched={false} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field-wrapper"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'border-radius', '2px')
        })
        it('should render transparent UrlField', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField variant="transparent" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field-wrapper"]')
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
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').should('have.attr', 'minLength')
            cy.get('[data-test="url-field"]').should('have.attr', 'maxLength')
            cy.get('[data-test="url-field"]').should(
                'have.attr',
                'autoComplete',
            )
            cy.get('[data-test="url-field"]').should('have.attr', 'placeholder')
            cy.get('[data-test="url-field"]').should('have.attr', 'type')
            cy.get('[data-test="url-field"]').should('have.attr', 'name')
            cy.get('[data-test="url-field"]').should('have.attr', 'id')
            cy.get('[data-test="url-field"]').should('have.attr', 'value')
            cy.get('[data-test="url-field"]').should('not.have.attr', 'active')
            cy.get('[data-test="url-field"]').should('not.have.attr', 'valid')
            cy.get('[data-test="url-field"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="url-field"]').should('not.have.attr', 'variant')
            cy.get('[data-test="url-field"]').should('not.have.attr', 'notched')

            cy.get('[data-test="url-field-wrapper"]').should(
                'not.have.attr',
                'active',
            )
            cy.get('[data-test="url-field-wrapper"]').should(
                'not.have.attr',
                'valid',
            )
            cy.get('[data-test="url-field-wrapper"]').should(
                'not.have.attr',
                'dataValue',
            )
            cy.get('[data-test="url-field-wrapper"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="url-field-wrapper"]').should(
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
                        <UrlField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledUrlField = styled(UrlField)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledUrlField m={32} p={32} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField className="test" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should not show error if the url is of valid length', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField minLength="2" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').type('test.com')
            cy.get('[data-testid="url-field-error"]').should('not.exist')
        })
        it('should show error if the url is not of valid length', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField minLength="10" />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').type('test.com')
            cy.get('[data-testid="url-field-error"]').should('exist')
        })
        it('should show error if UrlField is on focus and empty', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus()
            cy.get('[data-testid="url-field-error"]').should('exist')
        })
        it('should not show error if UrlField is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus().blur()
            cy.get('[data-testid="url-field-error"]').should('not.exist')
        })
        it('should not allow leading whitespaces', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .type(' ')
                .should('have.attr', 'value', '')
        })
        it('should not allow internal whitespaces', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .type('test@     example.    com')
                .should('have.attr', 'value', 'test@example.com')
        })
        it('should display light border when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(194, 194, 194)',
            )
        })
        it('should display red border when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus()
            cy.get('[data-test="url-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display red border when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus().type('Hi')
            cy.get('[data-test="url-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(202, 60, 31)',
            )
        })
        it('should display green border when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus().type('test.com')
            cy.get('[data-test="url-field-wrapper"]').and(
                'have.css',
                'border',
                '1px solid rgb(90, 107, 49)',
            )
        })

        it('should display light icon when the field is not on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="world-wide-web-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#8e8e8e')
        })
        it('should display red icon when the field is on focus', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus()
            cy.get('[data-testid="world-wide-web-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should display red icon when the field is on focus and invalid', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <UrlField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus()
            cy.get('[data-testid="world-wide-web-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#ca3c1f')
        })
        it('should display green icon when the field is on focus and valid', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <UrlField minLength={5} />
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="url-field"]').focus().type('test.com')
            cy.get('[data-testid="world-wide-web-icon"]')
                .find('g')
                .should('have.attr', 'fill', '#5a6b31')
        })
    })
})
