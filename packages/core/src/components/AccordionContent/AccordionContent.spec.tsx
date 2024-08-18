import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import Typography from '../Typography/Typography'
import Accordion from '../Accordion/Accordion'
import Layout from '../Layout/Layout'
import AccordionTitle from '../AccordionTitle/AccordionTitle'
import AccordionContent from './AccordionContent'

describe('<AccordionContent>', () => {
    context('Render', () => {
        it('should render AccordionContent component with default props', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Accordion Content
                                </Typography>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-title"]').click()
            cy.get('[data-test="accordion-content"]').should('exist')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent
                                m={32}
                                p={32}
                                className="test-class"
                                style={{ margin: '32px', padding: '32px' }}
                                data-test="test"
                            >
                                <Typography variant="body1">
                                    Accordion Content
                                </Typography>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-content"]').should(
                'have.attr',
                'class',
            )
            cy.get('[data-test="accordion-content"]').should(
                'have.attr',
                'style',
            )
            cy.get('[data-test="accordion-content"]').should(
                'have.attr',
                'data-test',
            )
            cy.get('[data-test="accordion-content"]').should(
                'not.have.attr',
                'm',
            )
            cy.get('[data-test="accordion-content"]').should(
                'not.have.attr',
                'p',
            )
            cy.get('[data-test="accordion-content"]').should(
                'not.have.attr',
                'variant',
            )
            cy.get('[data-test="accordion-content"]').should(
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
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent mb={32}>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-title"]').click()
            cy.get('[data-test="accordion-content"]')
                .should('exist')
                .and('have.css', 'margin-bottom', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledAccordionContent = styled(AccordionContent)`
                margin-bottom: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <StyledAccordionContent>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </StyledAccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-title"]').click()
            cy.get('[data-test="accordion-content"]')
                .should('exist')
                .and('have.css', 'margin-bottom', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent
                                style={{ margin: '32px', padding: '32px' }}
                            >
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-title"]').click()
            cy.get('[data-test="accordion-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent className="test">
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-title"]').click()
            cy.get('[data-test="accordion-content"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Behavior and Interactions', () => {
        it('should toggle accordion content', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Accordion Content
                                </Typography>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion-content"]')
                .should('exist')
                .and('have.css', 'max-height', '0px')
            cy.get('[data-test="accordion-title"]').click()
            cy.get('[data-test="accordion-content"]')
                .should('exist')
                .and('have.css', 'max-height', '600px')
        })
    })
})
