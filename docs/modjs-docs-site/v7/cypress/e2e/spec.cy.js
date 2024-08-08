describe('Mod.js Documentation Site', () => {
    context('Tests for Broken Links', () => {
        context('Components', () => {
            context('<Navbar />', () => {
                context('ModjsPackagesDrawer', () => {
                    context('<ModjsPackages />', () => {
                        it('should check ModjsPackages_link-home', () => {
                            //WARNING: Set viewport to mdScreen while testing to avoid multiple elements with same test-id (Components duplicated on largeScreen for ease: CoreNavigation, IconsNavigation)
                            cy.viewport(1279, 600)
                            cy.visit('/')
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = ModjsPackages_btn-toggle_packages_dropdown]',
                            ).click()
                            cy.intercept('GET', '/').as('req')
                            cy.get(
                                '[data-testid = ModjsPackages_link-home]',
                            ).click()
                            cy.url().should('match', /\//)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })

                        it('should check ModjsPackages_link-core', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = ModjsPackages_btn-toggle_packages_dropdown]',
                            ).click()
                            cy.intercept('GET', '/core').as('req')
                            cy.get(
                                '[data-testid = ModjsPackages_link-core]',
                            ).click()
                            cy.url().should('match', /\/core/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check ModjsPackages_link-icons', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = ModjsPackages_btn-toggle_packages_dropdown]',
                            ).click()
                            cy.intercept('GET', '/icons').as('req')
                            cy.get(
                                '[data-testid = ModjsPackages_link-icons]',
                            ).click()
                            cy.url().should('match', /\/icons/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                            cy.go('back')
                            cy.go('back')
                        })
                    })
                    context('<HomeNavigation />', () => {
                        it('should check HomeNavigation_link-github', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get('[data-testid=HomeNavigation_link-github]')
                                .should('have.attr', 'target', '_blank')
                                .and(
                                    'have.attr',
                                    'href',
                                    'https://github.com/modjs-org/modjs',
                                )
                                .then(link => {
                                    const href = link.prop('href')
                                    expect(href).to.eq(
                                        'https://github.com/modjs-org/modjs',
                                    )
                                    cy.request(href)
                                        .its('status')
                                        .should('eq', 200)
                                })
                        })
                    })
                    context('<CoreNavigation />', () => {
                        it('should check CoreNavigation_link-github', () => {
                            cy.go('forward')
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get('[data-testid=CoreNavigation_link-github]')
                                .should('have.attr', 'target', '_blank')
                                .and(
                                    'have.attr',
                                    'href',
                                    'https://github.com/modjs-org/modjs/tree/main/packages/core',
                                )
                                .then(link => {
                                    const href = link.prop('href')
                                    expect(href).to.eq(
                                        'https://github.com/modjs-org/modjs/tree/main/packages/core',
                                    )
                                    cy.request(href)
                                        .its('status')
                                        .should('eq', 200)
                                })
                        })
                        it('should check CoreNavigation_link-installation', () => {
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-getting_started]',
                            ).click()
                            cy.intercept('GET', '/core/installation').as('req')
                            cy.get(
                                '[data-testid=CoreNavigation_link-installation]',
                            ).click()
                            cy.url().should('match', /core\/installation/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-customization', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.intercept('GET', '/core/customization').as('req')
                            cy.get(
                                '[data-testid=CoreNavigation_link-customization]',
                            ).click()
                            cy.url().should('match', /core\/customization/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-accordion-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-accordion').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-accordion-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-accordion/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-accordion_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-accordion-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-accordion_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-accordion-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-accordion_title-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-accordion-title',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-accordion_title-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-accordion-title/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-appbar-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-appbar').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-appbar-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-appbar/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-article-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-article').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-article-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-article/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-aside-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-aside').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-aside-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-aside/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-avatar-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-avatar').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-avatar-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-avatar/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-box-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-box').as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-box-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-box/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-breadcrumbs-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-breadcrumbs',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-breadcrumbs-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-breadcrumbs/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-button-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-button').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-button-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-button/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-card-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-card').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-card-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-card/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-card_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-card-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-card_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-card-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-card_footer-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-card-footer',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-card_footer-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-card-footer/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-card_header-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-card-header',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-card_header-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-card-header/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-card_media-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-card-media',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-card_media-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-card-media/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-card_meta-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-card-meta').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-card_meta-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-card-meta/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-carousel-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-carousel').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-carousel-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-carousel/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-carousel_description-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-carousel-description',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-carousel_description-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-carousel-description/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-carousel_excerpt-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-carousel-excerpt',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-carousel_excerpt-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-carousel-excerpt/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-carousel_footer-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-carousel-footer',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-carousel_footer-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-carousel-footer/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-carousel_item-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-carousel-item',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-carousel_item-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-carousel-item/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-carousel_media-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-carousel-media',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-carousel_media-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-carousel-media/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-code_editor-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-code-editor',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-code_editor-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-code-editor/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-confirm_password_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-confirm-password-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-confirm_password_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-confirm-password-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-container-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-container').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-container-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-container/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-copy-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-copy').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-copy-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-copy/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-copy_response-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-copy-response',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-copy_response-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-copy-response/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-create_password_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-create-password-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-create_password_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-create-password-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-drawer-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-drawer').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-drawer-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-drawer/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-drawer_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-drawer-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-drawer_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-drawer-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-dropdown-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-dropdown').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-dropdown-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-dropdown/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-dropdown_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-dropdown-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-dropdown_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-dropdown-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-email_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-email-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-email_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-email-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-fieldset-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-fieldset').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-fieldset-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-fieldset/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-footer-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-footer').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-footer-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-footer/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-form-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-form').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-form-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-form/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-grid-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-grid').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-grid-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-grid/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-header-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-header').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-header-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-header/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-image-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-image').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-image-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-image/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-layout-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-layout').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-layout-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-layout/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-linear_progress-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-linear-progress',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-linear_progress-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-linear-progress/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-link-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-link').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-link-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-link/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-list-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-list').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-list-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-list/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-main-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-main').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-main-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-main/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-message_area-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-message-area',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-message_area-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-message-area/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-modal-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-modal').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-modal-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-modal/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-modal_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-modal-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-modal_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-modal-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-name_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-name-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-name_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-name-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-nav-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-nav').as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-nav-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-nav/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-ordered_list-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-ordered-list',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-ordered_list-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-ordered-list/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-password_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-password-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-password_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-password-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-phone_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-phone-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-phone_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-phone-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-pill-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-pill').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-pill-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-pill/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-pre-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-pre').as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-pre-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-pre/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-search_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-search-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-search_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-search-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-search_results-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-search-results',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-search_results-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-search-results/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-section-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-section').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-section-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-section/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-separator-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-separator').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-separator-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-separator/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-side_navigation-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-side-navigation',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-side_navigation-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-side-navigation/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-slideshow-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-slideshow').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-slideshow-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-slideshow/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-slideshow_description-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-slideshow-description',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-slideshow_description-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-slideshow-description/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-slideshow_excerpt-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-slideshow-excerpt',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-slideshow_excerpt-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-slideshow-excerpt/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-slideshow_footer-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-slideshow-footer',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-slideshow_footer-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-slideshow-footer/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-slideshow_item-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-slideshow-item',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-slideshow_item-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-slideshow-item/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-slideshow_media-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-slideshow-media',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-slideshow_media-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-slideshow-media/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-snackbar-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-snackbar').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-snackbar-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-snackbar/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-snackbar_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-snackbar-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-snackbar_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-snackbar-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-snackbar_header-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-snackbar-header',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-snackbar_header-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-snackbar-header/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-table-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-table').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-table-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-table/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-table_body-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-table-body',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-table_body-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-table-body/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-table_data-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-table-data',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-table_data-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-table-data/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-table_head-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-table-head',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-table_head-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-table-head/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-table_header-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-table-header',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-table_header-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-table-header/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-table_row-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-table-row').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-table_row-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-table-row/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-text_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-text-field',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-text_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-text-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-textarea-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-textarea').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-textarea-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-textarea/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-toolbar-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-toolbar').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-toolbar-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-toolbar/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-tooltip-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-tooltip').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-tooltip-api]',
                            ).click()
                            cy.url().should('match', /core\/api\/react-tooltip/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-tooltip_content-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-tooltip-content',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-tooltip_content-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-tooltip-content/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-typography-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-typography',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-typography-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-typography/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-unordered_list-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept(
                                'GET',
                                '/core/api/react-unordered-list',
                            ).as('req')
                            cy.get(
                                '[data-testid = CoreNavigation_link-unordered_list-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-unordered-list/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check CoreNavigation_link-url_field-api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = CoreNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-url-field').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = CoreNavigation_link-url_field-api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-url-field/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                    })

                    /*
                    --------------------------------------------------------------------------------------------------------------------------------------------
                    --------------------------------------------Section: IconsNavigation------------------------------------------------------------------------
                    --------------------------------------------------------------------------------------------------------------------------------------------
                    */
                    context('<IconsNavigation />', () => {
                        it('should check IconsNavigation_link-github', () => {
                            cy.visit('/icons')
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get('[data-testid=IconsNavigation_link-github]')
                                .should('have.attr', 'target', '_blank')
                                .and(
                                    'have.attr',
                                    'href',
                                    'https://github.com/modjs-org/modjs/tree/main/packages/icons',
                                )
                                .then(link => {
                                    const href = link.prop('href')
                                    expect(href).to.eq(
                                        'https://github.com/modjs-org/modjs/tree/main/packages/icons',
                                    )
                                    cy.request(href)
                                        .its('status')
                                        .should('eq', 200)
                                })
                        })
                        it('should check IconsNavigation_link-installation', () => {
                            cy.get(
                                '[data-testid = IconsNavigation_accordion-getting_started]',
                            ).click()
                            cy.intercept('GET', '/icons/installation').as('req')
                            cy.get(
                                '[data-testid=IconsNavigation_link-installation]',
                            ).click()
                            cy.url().should('match', /icons\/installation/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })

                        //
                        it('should check IconsNavigation_link-customization', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = IconsNavigation_accordion-getting_started]',
                            ).click()
                            cy.intercept('GET', '/icons/customization').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = IconsNavigation_link-customization]',
                            ).click()
                            cy.url().should('match', /icons\/customization/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check IconsNavigation_link-icons_api', () => {
                            cy.get(
                                '[data-testid = Navbar_btn-toggle_packages_drawer]',
                            ).click()
                            cy.get(
                                '[data-testid = IconsNavigation_accordion-component_api]',
                            ).click()
                            cy.intercept('GET', '/icons/api').as('req')
                            cy.get(
                                '[data-testid = IconsNavigation_link-icons_api]',
                            ).click()
                            cy.url().should('match', /icons\/api/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                    })
                })
                //GlobalSearch
                context('GlobalSearchModal', () => {
                    //CommonSearches
                    context('CommonSearches', () => {
                        it('should check GlobalSearch_link-core', () => {
                            cy.visit('/')
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/core').as('req')
                            cy.get(
                                '[data-testid = GlobalSearch_link-core]',
                            ).click()
                            cy.url().should('match', /core/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-core_installation', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/core/installation').as('req')
                            cy.get(
                                '[data-testid = GlobalSearch_link-core_installation]',
                            ).click()
                            cy.url().should('match', /core\/installation/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-core_customization', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/core/customization').as('req')
                            cy.get(
                                '[data-testid = GlobalSearch_link-core_customization]',
                            ).click()
                            cy.url().should('match', /core\/customization/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-core_api', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/core/api/react-accordion').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = GlobalSearch_link-core_api]',
                            ).click()
                            cy.url().should(
                                'match',
                                /core\/api\/react-accordion/,
                            )
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-icons', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/icons').as('req')
                            cy.get(
                                '[data-testid = GlobalSearch_link-icons]',
                            ).click()
                            cy.url().should('match', /icons/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-icons_installation', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/icons/installation').as('req')
                            cy.get(
                                '[data-testid = GlobalSearch_link-icons_installation]',
                            ).click()
                            cy.url().should('match', /icons\/installation/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-icons_customization', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/icons/customization').as(
                                'req',
                            )
                            cy.get(
                                '[data-testid = GlobalSearch_link-icons_customization]',
                            ).click()
                            cy.url().should('match', /icons\/customization/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                        it('should check GlobalSearch_link-icons_api', () => {
                            cy.get(
                                '[data-testid = GlobalSearch_btn-toggle_search_modal]',
                            ).click()
                            cy.intercept('GET', '/icons/api').as('req')
                            cy.get(
                                '[data-testid = GlobalSearch_link-icons_api]',
                            ).click()
                            cy.url().should('match', /icons\/api/)
                            cy.wait('@req')
                                .its('response.statusCode')
                                .should('eq', 200)
                        })
                    })
                    //SearchResults
                    context('SearchResults', () => {})
                })
            })
            //Footer
            context('<Footer />', () => {
                it('should check Footer_link-fullstackpro_home_page', () => {
                    cy.visit('/')

                    cy.get('[data-testid=Footer_link-fullstackpro_home_page]')
                        .should(
                            'have.attr',
                            'href',
                            'https://www.fullstackpro.io',
                        )
                        .then(link => {
                            const href = link.prop('href')
                            expect(href).to.eq('https://www.fullstackpro.io/')
                            cy.request(href).its('status').should('eq', 200)
                        })
                })
                //TODO: takes forever to run
                // it('should check Footer_link-sitemap', () => {
                //     cy.intercept('GET', 'http://localhost:3000/sitemap.xml').as(
                //         'req',
                //     )
                //     cy.get('[data-testid = Footer_link-sitemap]').click()
                //     cy.url().should(
                //         'match',
                //         /http:\/\/localhost:3000\/sitemap.xml/,
                //     )
                //     cy.wait('@req').its('response.statusCode').should('eq', 200)
                // })
            })
            //SystemPropsNavigation
            context('<SystemPropsNavigation />', () => {
                it('should check SystemPropsNavigation fragmentId ', () => {
                    cy.visit('/core/api/react-box') //WARNING: test cases below are run on /core/api/react-box page
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-align_items]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#align-items/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-bgColor]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#bgColor/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-bottom]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#bottom/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#border/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_top]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#border-top/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_right]',
                    ).click()
                    cy.url().should(
                        'match',
                        /core\/api\/react-box#border-right/,
                    )
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_bottom]',
                    ).click()
                    cy.url().should(
                        'match',
                        /core\/api\/react-box#border-bottom/,
                    )
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_left]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#border-left/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_x]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#border-x/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_y]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#border-y/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-border_radius]',
                    ).click()
                    cy.url().should(
                        'match',
                        /core\/api\/react-box#border-radius/,
                    )
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-color]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#color/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-display]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#display/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-elavation]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#elevation/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-flex_wrap]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#flex-wrap/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-float]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#float/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-fs]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#fs/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-fw]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#fw/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-gap]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#gap/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-height]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#height/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-justify_content]',
                    ).click()
                    cy.url().should(
                        'match',
                        /core\/api\/react-box#justify-content/,
                    )
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-left]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#left/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-m]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#m/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-mt]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#mt/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-mr]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#mr/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-mb]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#mb/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-ml]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#ml/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-m]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#m/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-mx]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#mx/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-my]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#my/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-p]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#p/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-pt]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#pt/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-pr]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#pr/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-pb]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#pb/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-pl]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#pl/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-px]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#px/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-py]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#py/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-position]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#position/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-right]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#right/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-text_transform]',
                    ).click()
                    cy.url().should(
                        'match',
                        /core\/api\/react-box#text-transform/,
                    )
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-text_align]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#text-align/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-top]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#top/)
                    cy.get(
                        '[data-testid = SystemPropsNavigation_link-width]',
                    ).click()
                    cy.url().should('match', /core\/api\/react-box#width/)
                })
            })
        })
        //Pages
        context('Pages', () => {
            //Home Page
            context('/', () => {
                it('should link to /core/installation when getting_started is clicked', () => {
                    cy.visit('/')
                    cy.intercept('GET', '/core/installation').as('req')
                    cy.get('[data-testid = getting_started]').click()
                    cy.url().should('match', /core\/installation/)
                    cy.wait('@req').its('response.statusCode').should('eq', 200)
                    cy.go('back')
                })
                it('should link to /core/api/react-accordion when view_core_components_api is clicked', () => {
                    cy.intercept('GET', '/core/api/react-accordion').as('req')
                    cy.get('[data-testid = view_core_components_api]').click()
                    cy.url().should('match', /core\/api\/react-accordion/)
                    cy.wait('@req').its('response.statusCode').should('eq', 200)
                    cy.go('back')
                })
                it('should link to /core when core_learn_more is clicked', () => {
                    cy.intercept('GET', '/core').as('req')
                    cy.get('[data-testid = core_learn_more]').click()
                    cy.url().should('match', /core/)
                    cy.wait('@req').its('response.statusCode').should('eq', 200)
                    cy.go('back')
                })
                it('should link to /icons when icons_learn_more is clicked', () => {
                    cy.intercept('GET', '/icons').as('req')
                    cy.get('[data-testid = icons_learn_more]').click()
                    cy.url().should('match', /icons/)
                    cy.wait('@req').its('response.statusCode').should('eq', 200)
                    cy.go('back')
                })
                it('should link to /github/utils when utils_github_repository is clicked', () => {
                    cy.get('[data-testid=utils_github_repository]')
                        .should('have.attr', 'target', '_blank')
                        .and(
                            'have.attr',
                            'href',
                            'https://github.com/modjs-org/modjs/tree/main/packages/utils',
                        )
                        .then(link => {
                            const href = link.prop('href')
                            expect(href).to.eq(
                                'https://github.com/modjs-org/modjs/tree/main/packages/utils',
                            )
                            cy.request(href).its('status').should('eq', 200)
                        })
                })
                it('should link to /github/helpers when helpers_github_repository is clicked', () => {
                    cy.get('[data-testid=helpers_github_repository]')
                        .should('have.attr', 'target', '_blank')
                        .and(
                            'have.attr',
                            'href',
                            'https://github.com/modjs-org/modjs/tree/main/packages/helpers',
                        )
                        .then(link => {
                            const href = link.prop('href')
                            expect(href).to.eq(
                                'https://github.com/modjs-org/modjs/tree/main/packages/helpers',
                            )
                            cy.request(href).its('status').should('eq', 200)
                        })
                    cy.go('back')
                })
                //Core Page
                context('/core', () => {
                    it('should link to /core/installation when getting_started is clicked', () => {
                        cy.visit('/core')
                        cy.intercept('GET', '/core/installation').as('req')
                        cy.get('[data-testid = getting_started]').click()
                        cy.url().should('match', /core\/installation/)
                        cy.wait('@req')
                            .its('response.statusCode')
                            .should('eq', 200)
                        cy.go('back')
                    })
                    it('should link to /core/api/react-accordion when view_components_api is clicked', () => {
                        cy.intercept('GET', '/core/api/react-accordion').as(
                            'req',
                        )
                        cy.get('[data-testid = view_components_api]').click()
                        cy.url().should('match', /core\/api\/react-accordion/)
                        cy.wait('@req')
                            .its('response.statusCode')
                            .should('eq', 200)
                        cy.go('back')
                    })
                    it('should link to /core/installation when installation_learn_more is clicked', () => {
                        cy.intercept('GET', '/core/installation').as('req')
                        cy.get(
                            '[data-testid = installation_learn_more]',
                        ).click()
                        cy.url().should('match', /core\/installation/)
                        cy.wait('@req')
                            .its('response.statusCode')
                            .should('eq', 200)
                        cy.go('back')
                    })
                    it('should link to /core/customization when customization_learn_more is clicked', () => {
                        cy.intercept('GET', '/core/customization').as('req')
                        cy.get(
                            '[data-testid = customization_learn_more]',
                        ).click()
                        cy.url().should('match', /core\/customization/)
                        cy.wait('@req')
                            .its('response.statusCode')
                            .should('eq', 200)
                        cy.go('back')
                    })
                    it('should link to /core/api/react-accordion when api_learn_more is clicked', () => {
                        cy.intercept('GET', '/core/api/react-accordion').as(
                            'req',
                        )
                        cy.get('[data-testid = api_learn_more]').click()
                        cy.url().should('match', /core\/api\/react-accordion/)
                        cy.wait('@req')
                            .its('response.statusCode')
                            .should('eq', 200)
                        cy.go('back')
                    })
                    it('should link to /github/core when github_repository is clicked', () => {
                        cy.get('[data-testid=github_repository]')
                            .should('have.attr', 'target', '_blank')
                            .and(
                                'have.attr',
                                'href',
                                'https://github.com/modjs-org/modjs/tree/main/packages/core',
                            )
                            .then(link => {
                                const href = link.prop('href')
                                expect(href).to.eq(
                                    'https://github.com/modjs-org/modjs/tree/main/packages/core',
                                )
                                cy.request(href).its('status').should('eq', 200)
                            })
                    })
                    //Installation Page
                    context('/core/installation', () => {
                        context('Main', () => {
                            it('should link to /core when breadcrumbs_core is clicked', () => {
                                cy.visit('/core/installation')
                                cy.intercept('GET', '/core').as('req')
                                cy.get(
                                    '[data-testid = breadcrumbs_core]',
                                ).click()
                                cy.url().should('match', /core/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                            it('should link to /core/installation when breadcrumbs_installation is clicked', () => {
                                cy.intercept('GET', '/core/installation').as(
                                    'req',
                                )
                                cy.get(
                                    '[data-testid = breadcrumbs_installation]',
                                ).click()
                                cy.url().should('match', /core\/installation/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                            })
                            it('should link to /nodejs when prerequisites_here is clicked', () => {
                                cy.get('[data-testid=prerequisites_here]')
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://nodejs.org/en',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq(
                                            'https://nodejs.org/en',
                                        )
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /reactjs when prerequisites_react is clicked', () => {
                                cy.get('[data-testid=prerequisites_react]')
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://react.dev/',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq('https://react.dev/')
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /github/utils when dependencies_utils is clicked', () => {
                                cy.get('[data-testid=dependencies_utils]')
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://github.com/modjs-org/modjs/tree/main/packages/utils',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq(
                                            'https://github.com/modjs-org/modjs/tree/main/packages/utils',
                                        )
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /github/helpers when dependencies_helpers is clicked', () => {
                                cy.get('[data-testid=dependencies_helpers]')
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://github.com/modjs-org/modjs/tree/main/packages/helpers',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq(
                                            'https://github.com/modjs-org/modjs/tree/main/packages/helpers',
                                        )
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /core when prev_core is clicked', () => {
                                cy.intercept('GET', '/core').as('req')
                                cy.get('[data-testid = prev_core]').click()
                                cy.url().should('match', /core/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                            it('should link to /core/customization when next_customization is clicked', () => {
                                cy.intercept('GET', '/core/customization').as(
                                    'req',
                                )
                                cy.get(
                                    '[data-testid = next_customization]',
                                ).click()
                                cy.url().should('match', /core\/customization/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                        })
                        context('TableOfContents', () => {
                            it('should link to correct section based on fragmentId', () => {
                                cy.get('[data-testid = installation]').click()
                                cy.url().should(
                                    'match',
                                    /core\/installation#installation/,
                                )
                                cy.get('[data-testid = prerequisites]').click()
                                cy.url().should(
                                    'match',
                                    /core\/installation#prerequisites/,
                                )
                                cy.get(
                                    '[data-testid = peer_dependencies]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/installation#peer-dependencies/,
                                )
                                cy.get('[data-testid = dependencies]').click()
                                cy.url().should(
                                    'match',
                                    /core\/installation#dependencies/,
                                )
                                cy.get('[data-testid = quick_install]').click()
                                cy.url().should(
                                    'match',
                                    /core\/installation#quick-install/,
                                )
                            })
                        })
                    })
                    context('/core/customization', () => {
                        context('Main', () => {
                            it('should link to /core when breadcrumbs_core is clicked', () => {
                                cy.visit('/core/customization')
                                cy.intercept('GET', '/core').as('req')
                                cy.get(
                                    '[data-testid = breadcrumbs_core]',
                                ).click()
                                cy.url().should('match', /core/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                            it('should link to /core/customization when breadcrumbs_customization is clicked', () => {
                                cy.intercept('GET', '/core/customization').as(
                                    'req',
                                )
                                cy.get(
                                    '[data-testid = breadcrumbs_customization]',
                                ).click()
                                cy.url().should('match', /core\/customization/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                            })
                            it('should link to /github/utils when theming_modjs_utils is clicked', () => {
                                cy.get('[data-testid=theming_modjs_utils]')
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://github.com/modjs-org/modjs/tree/main/packages/utils',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq(
                                            'https://github.com/modjs-org/modjs/tree/main/packages/utils',
                                        )
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /github/utils/withSystemProps when system_props_withSystemProps is clicked', () => {
                                cy.get(
                                    '[data-testid=system_props_withSystemProps]',
                                )
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://github.com/modjs-org/modjs/blob/main/packages/utils/src/components/withSystemProps/withSystemProps.tsx',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq(
                                            'https://github.com/modjs-org/modjs/blob/main/packages/utils/src/components/withSystemProps/withSystemProps.tsx',
                                        )
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /styled-components when styled_components_styled_components is clicked', () => {
                                cy.get(
                                    '[data-testid=styled_components_styled_components]',
                                )
                                    .should('have.attr', 'target', '_blank')
                                    .and(
                                        'have.attr',
                                        'href',
                                        'https://styled-components.com/',
                                    )
                                    .then(link => {
                                        const href = link.prop('href')
                                        expect(href).to.eq(
                                            'https://styled-components.com/',
                                        )
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /core/installation when prev_installation is clicked', () => {
                                cy.intercept('GET', '/core/installation').as(
                                    'req',
                                )
                                cy.get(
                                    '[data-testid = prev_installation]',
                                ).click()
                                cy.url().should('match', /core\/installation/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                            it('should link to /core/api/react-accordion when next_accordion_api is clicked', () => {
                                cy.intercept(
                                    'GET',
                                    '/core/api/react-accordion',
                                ).as('req')
                                cy.get(
                                    '[data-testid = next_accordion_api]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion/,
                                )
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                        })
                        context('TableOfContents', () => {
                            it('should link to correct section based on fragmentId', () => {
                                cy.get('[data-testid = customization]').click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#customization/,
                                )
                                cy.get('[data-testid = theming]').click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#theming/,
                                )
                                cy.get('[data-testid = light_theme]').click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#light-theme/,
                                )
                                cy.get('[data-testid = dark_theme]').click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#dark-theme/,
                                )
                                cy.get(
                                    '[data-testid = override_styles]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#override-styles/,
                                )
                                cy.get('[data-testid = system_props]').click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#system-props/,
                                )
                                cy.get(
                                    '[data-testid = styled_components]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#styled-components/,
                                )
                                cy.get(
                                    '[data-testid = custom_classnames]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#custom-classnames/,
                                )
                                cy.get('[data-testid = inline_styles]').click()
                                cy.url().should(
                                    'match',
                                    /core\/customization#inline-styles/,
                                )
                            })
                        })
                    })
                    context('/core/api/react-accordion', () => {
                        context('Main', () => {
                            it('should link to /core when breadcrumbs_core is clicked', () => {
                                cy.visit('/core/api/react-accordion')
                                cy.intercept('GET', '/core').as('req')
                                cy.get(
                                    '[data-testid = breadcrumbs_core]',
                                ).click()
                                cy.url().should('match', /core/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                            it('should link to /core/api/react-accordion when breadcrumbs_react_accordion is clicked', () => {
                                cy.intercept(
                                    'GET',
                                    '/core/api/react-accordion',
                                ).as('req')
                                cy.get(
                                    '[data-testid = breadcrumbs_react_accordion]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion/,
                                )
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
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
                                        cy.request(href)
                                            .its('status')
                                            .should('eq', 200)
                                    })
                            })
                            it('should link to /core/customization when prev_customization is clicked', () => {
                                cy.intercept('GET', '/core/customization').as(
                                    'req',
                                )
                                cy.get(
                                    '[data-testid = prev_customization ]',
                                ).click()
                                cy.url().should('match', /core\/customization/)
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                            it('should link to /core/api/react-accordion when next_accordion_content_api is clicked', () => {
                                cy.intercept(
                                    'GET',
                                    '/core/api/react-accordion-content',
                                ).as('req')
                                cy.get(
                                    '[data-testid = next_accordion_content_api]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion-content/,
                                )
                                cy.wait('@req')
                                    .its('response.statusCode')
                                    .should('eq', 200)
                                cy.go('back')
                            })
                        })
                        context('TableOfContents', () => {
                            it('should link to correct section based on fragmentId', () => {
                                cy.get('[data-testid = accordion_api]').click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion#accordion-api/,
                                )
                                cy.get('[data-testid = import]').click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion#import/,
                                )
                                cy.get(
                                    '[data-testid = accordion_props]',
                                ).click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion#accordion-props/,
                                )
                                cy.get('[data-testid = system_props]').click()
                                cy.url().should(
                                    'match',
                                    /core\/api\/react-accordion#system-props/,
                                )
                            })
                        })
                    })
                })
                context('/icons', () => {
                    context('/icons/installation', () => {})
                    context('/icons/customization', () => {})
                    context('/icons/api', () => {})
                })
            })
        })
    })
})
