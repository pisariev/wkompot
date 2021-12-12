import merge from 'deepmerge';
import baseConf from './common/base.conf';

exports.config = merge(baseConf.config, {
    hostname: process.env.REMOTE_ADDRESS,
    port: 4444,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--window-size=1280,720']
        },
    }],
}, { clone: false });