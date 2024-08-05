import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import CodeEditor from './CodeEditor'
import Layout from '../Layout/Layout'
import Typography from '../Typography/Typography'

const codeEditorContent = `
import React from 'react'
import { Typography } from '@modjs/core'

const App = () => {
    return (
        <div>
            <Typography variant="h3">CodeEditor component CodeEditor component CodeEditor component CodeEditor component CodeEditor component CodeEditor component</Typography>
        </div>
    )
}

export default App
`

describe('<CodeEditor>', () => {
    context('Render', () => {
        it('should render default CodeEditor component', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CodeEditor
                            variant="filled"
                            notched={true}
                            header={
                                <Typography variant="body1" color="success">
                                    App.jsx
                                </Typography>
                            }
                        >
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CodeEditor
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            variant="filled"
                            notched={true}
                        >
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]').should('have.attr', 'class')
            cy.get('[data-test="code-editor"]').should('have.attr', 'style')
            cy.get('[data-test="code-editor"]').should('have.attr', 'data-test')
            cy.get('[data-test="code-editor"]').should('not.have.attr', 'm')
            cy.get('[data-test="code-editor"]').should('not.have.attr', 'p')
            cy.get('[data-test="code-editor"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="code-editor"]').should(
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
                        <CodeEditor
                            m={32}
                            p={32}
                            variant="filled"
                            notched={true}
                        >
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledCodeEditor = styled(CodeEditor)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledCodeEditor
                            m={32}
                            p={32}
                            variant="filled"
                            notched={true}
                        >
                            {codeEditorContent}
                        </StyledCodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CodeEditor
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                            variant="filled"
                            notched={true}
                        >
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]')
                .should('exist')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CodeEditor
                            className="test"
                            variant="filled"
                            notched={true}
                        >
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Interactions and Behavior', () => {
        it('should toggle stop and run code icon', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <CodeEditor
                            variant="filled"
                            notched={true}
                            disableExec={false}
                        >
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-testid="run-code-icon"]').click()
            cy.get('[data-testid="stop-code-icon"]').should('exist')
            cy.get('[data-testid="stop-code-icon"]').click()
            cy.get('[data-testid="run-code-icon"]').should('exist')
        })
    })
    context('Integrations', () => {
        it('should integrate well with Pre component', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <CodeEditor variant="filled" notched={true}>
                            {codeEditorContent}
                        </CodeEditor>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="code-editor"]').should('exist')
            cy.get('[data-test="pre"]').should('exist')
        })
    })
})
