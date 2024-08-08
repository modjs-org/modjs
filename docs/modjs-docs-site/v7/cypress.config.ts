import { defineConfig } from 'cypress'

export default defineConfig({
    // viewportWidth: 1290,
    // viewportHeight: 600,
    e2e: {
        baseUrl: 'http://localhost:3000',
        testIsolation: false, //Performance: Set to false to not visit url on each test
    },
})
