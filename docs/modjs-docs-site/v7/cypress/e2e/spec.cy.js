describe('Mod.js Documentation Site', () => {
    context('Find Broken Links', () => {
        it('should check for broken links', () => {
            cy.visit('http://localhost:3000/')
            cy.get('[data-testid = "pkg-dropdown-docs-v7"]').click()
        })
    })
})
