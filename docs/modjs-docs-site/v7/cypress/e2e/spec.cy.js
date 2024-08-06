describe('Mod.js Documentation Site', () => {
    context('Find Broken Links', () => {
        it('should check for broken links', () => {
            cy.visit('http://localhost:3000/')

            cy.get('[data-testid = "Navbar-toggle-packages-drawer"]').click()
            cy.get('[data-testid = "ModPackages-dropdown-toggle"]').click()
            cy.intercept('GET', 'http://localhost:3000').as('getHomePage')
            cy.get('[data-testid = "ModPackages-link-root"]').click()
            cy.url().should('match', /\//)
            cy.wait('@getHomePage').its('response.statusCode').should('eq', 200)
        })
    })
})
