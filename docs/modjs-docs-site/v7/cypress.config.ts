import { defineConfig } from 'cypress'

export default defineConfig({
    viewportWidth: 1290,
    viewportHeight: 600,
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        },
    },
})
