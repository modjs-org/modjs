context.only('/core/api/react-accordion', () => {
    context('Main', () => {
        it('should link to /core when breadcrumbs_core is clicked', () => {
            cy.visit('/core/api/react-accordion')
            cy.intercept('GET', '/core').as('req')
            cy.get('[data-testid = breadcrumbs_core]').click()
            cy.url().should('match', /core/)
            cy.wait('@req').its('response.statusCode').should('eq', 200)
            cy.go('back')
        })
        it('should link to /core/api/react-accordion when breadcrumbs_react_accordion is clicked', () => {
            cy.intercept('GET', '/core/api/react-accordion').as('req')
            cy.get('[data-testid = breadcrumbs_react_accordion]').click()
            cy.url().should('match', /core\/api\/react-accordion/)
            cy.wait('@req').its('response.statusCode').should('eq', 200)
        })
        it('should link to /github/core/accordion when import_github is clicked', () => {
            cy.get('[data-testid=import_github]')
                .should('have.attr', 'target', '_blank')
                .and(
                    'have.attr',
                    'href',
                    'https://github.com/modjs-org/modjs/blob/main/packages/core/src/components/Accordion/Accordion.tsx',
                )
                .then(link => {
                    const href = link.prop('href')
                    expect(href).to.eq(
                        'https://github.com/modjs-org/modjs/blob/main/packages/core/src/components/Accordion/Accordion.tsx',
                    )
                    cy.request(href).its('status').should('eq', 200)
                })
        })
        it('should link to /core/customization when prev_customization is clicked', () => {
            cy.intercept('GET', '/core/customization').as('req')
            cy.get('[data-testid = prev_customization ]').click()
            cy.url().should('match', /core\/customization/)
            cy.wait('@req').its('response.statusCode').should('eq', 200)
            cy.go('back')
        })
        it('should link to /core/api/react-accordion when next_accordion_content_api is clicked', () => {
            cy.intercept('GET', '/core/api/react-accordion-content').as('req')
            cy.get('[data-testid = next_accordion_content_api]').click()
            cy.url().should('match', /core\/api\/react-accordion-content/)
            cy.wait('@req').its('response.statusCode').should('eq', 200)
            cy.go('back')
        })
    })
    context('TableOfContents', () => {
        it('should link to correct section based on fragmentId', () => {
            cy.get('[data-testid = accordion_api]').click()
            cy.url().should('match', /core\/api\/react-accordion#accordion-api/)
            cy.get('[data-testid = import]').click()
            cy.url().should('match', /core\/api\/react-accordion#import/)
            cy.get('[data-testid = accordion_props]').click()
            cy.url().should(
                'match',
                /core\/api\/react-accordion#accordion-props/,
            )
            cy.get('[data-testid = system_props]').click()
            cy.url().should('match', /core\/api\/react-accordion#system-props/)
        })
    })
})
