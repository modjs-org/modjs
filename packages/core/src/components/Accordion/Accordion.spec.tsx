import React from 'react'
import { styled } from 'styled-components'
import { ModThemeProvider, ModLightTheme, ModDarkTheme } from '@modjs/utils'
import '../../../cypress/fixtures/style.css'
import Typography from '../Typography/Typography'
import Accordion from './Accordion'
import AccordionTitle from '../AccordionTitle/AccordionTitle'
import AccordionContent from '../AccordionContent/AccordionContent'
import Layout from '../Layout/Layout'

describe('<Accordion>', () => {
    context('Render', () => {
        it('should render default Accordion component', () => {
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
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'border', '1px solid rgb(194, 194, 194)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
            cy.get('[data-test="accordion-title"]').should('exist')
            cy.get('[data-test="accordion-content"]').should('exist')
        })
        it('should render custom Accordion componnent', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion variant="outlined" notched={true}>
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
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($accordion => {
                    const beforeEl = window.getComputedStyle(
                        $accordion[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                    // expect(beforeStyles.getPropertyValue('position')).to.equal(
                    //     'absolute',
                    // )
                })
        })
        it('should render filled accordion without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion variant="filled" notched={false}>
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
                                    text ever since the 1500s
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
        })
        it('should render filled accordion with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion variant="filled" notched={true}>
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
                                    text ever since the 1500s
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(242, 242, 242)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($accordion => {
                    const beforeEl = window.getComputedStyle(
                        $accordion[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render outlined accordion without notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion variant="outlined" notched={false}>
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
                                    text ever since the 1500s
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
        })
        it('should render outlined accordion with notch', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion variant="outlined" notched={true}>
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
                                    text ever since the 1500s
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '8px 0px')
                .and('have.css', 'padding', '4px 8px')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .then($accordion => {
                    const beforeEl = window.getComputedStyle(
                        $accordion[0],
                        '::before',
                    )
                    expect(beforeEl).to.exist
                })
        })
        it('should render transparent accordion', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion variant="transparent" notched={false}>
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
                                    text ever since the 1500s
                                </Typography>
                            </AccordionContent>
                        </Accordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'background-color', 'rgb(255, 255, 255)')
                .and('have.css', 'margin', '4px 0px')
                .and('have.css', 'padding', '0px')
        })
    })
    context('Props', () => {
        it('should include only valid props in the DOM element and not include any custom attributes from modjs', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion
                            m={32}
                            p={32}
                            className="test-class"
                            style={{ margin: '32px', padding: '32px' }}
                            data-test="test"
                            variant="filled"
                            notched={true}
                        >
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
            cy.get('[data-test="accordion"]').should('have.attr', 'class')
            cy.get('[data-test="accordion"]').should('have.attr', 'style')
            cy.get('[data-test="accordion"]').should('have.attr', 'data-test')
            cy.get('[data-test="accordion"]').should('not.have.attr', 'm')
            cy.get('[data-test="accordion"]').should('not.have.attr', 'p')
            cy.get('[data-test="accordion"]').should('not.have.attr', 'variant')
            cy.get('[data-test="accordion"]').should('not.have.attr', 'notched')
        })
    })

    context('Global and Custom Styles', () => {
        it('should override default styles add new styles with styles from withSystemProps HOC', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion p={32} m={32}>
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
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should override as well as add styles when wrapped with styled() from styled components', () => {
            const StyledAccordion = styled(Accordion)`
                margin: 32px;
                padding: 32px;
            `
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <StyledAccordion>
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
                        </StyledAccordion>
                    </Layout>
                </ModThemeProvider>,
            )
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add inline styles with highest precedence', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion
                            p={0}
                            m={0}
                            style={{ margin: '32px', padding: '32px' }}
                        >
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
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
        it('should add custom classNames and override as well as add styles from a separate css file', () => {
            cy.mount(
                <ModThemeProvider theme={ModLightTheme}>
                    <Layout p={16}>
                        <Accordion className="test">
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
            cy.get('[data-test="accordion"]')
                .should('exist')
                .and('have.css', 'padding', '32px')
                .and('have.css', 'margin', '32px')
        })
    })
    context('Integrations', () => {
        it('should integrate with other Accordion components', () => {
            cy.mount(
                <ModThemeProvider theme={ModDarkTheme}>
                    <Layout p={16}>
                        <Accordion variant="filled" notched={true}>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Filled Notched Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Filled Notched Accordion Content
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
                        <Accordion variant="filled" notched={false}>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Filled Not Notched Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Filled Not Notched Accordion Content
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
                        <Accordion variant="outlined" notched={true}>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Outlined Notched Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Outlined Notched Accordion Content
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
                        <Accordion variant="outlined" notched={false}>
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Outlined Not Notched Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Outlined Not Notched Accordion Content
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
                        <Accordion variant="transparent">
                            <AccordionTitle>
                                <Typography variant="h3">
                                    Transparent Accordion Title
                                </Typography>
                            </AccordionTitle>
                            <AccordionContent>
                                <Typography variant="body1">
                                    Transparent Accordion Content
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
            cy.get('[data-test="accordion"]').should('exist')
            cy.get('[data-test="accordion-title"]').should('exist')
            cy.get('[data-test="accordion-content"]').should('exist')
        })
    })
})
