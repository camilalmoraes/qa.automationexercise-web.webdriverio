import process from 'process'

const isHeadless = process.env.HEADLESS === 'true'

export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],

    suites: {
        registro: ['./test/specs/registro.spec.js']
    },

    exclude: [],

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                ...(isHeadless ? ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'] : []),
                '--window-size=1920,1080'
            ]
        }
    }],

    baseUrl: 'https://automationexercise.com/',

    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [],

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}