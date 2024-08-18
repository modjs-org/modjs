import { defineConfig } from 'cypress'

export default defineConfig({
    viewportWidth: 769, //CAUTION: A lot of tests that depends on viewport size will fail if this is changed. Modify this in each test cases/suite instead whenever necessary
    viewportHeight: 600,
    component: {
        specPattern: 'src/**/*.spec.{ts,tsx}',
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },
})
