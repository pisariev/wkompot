import { config } from 'dotenv';
import hooks from './hooks.conf';

config();

exports.config = {
    specs: [
        './specs/**/auth.spec.js'
    ],
    exclude: [
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: process.env.BASE_URL,

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools', 'geckodriver'],
    reporters: ['spec', ['allure', {
        disableWebdriverStepsReporting: true
    }]],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    ...hooks,
}