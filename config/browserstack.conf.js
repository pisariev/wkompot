import merge from 'deepmerge';
import baseConf from './common/base.conf';

exports.config = merge(baseConf.config, {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    updateJob: false,
    maxInstances: 2,
    capabilities: [{
        'browser': 'safari',
        'browser_version': '15.0',
        'os': 'OS X',
        'os_version': 'Monterey',
        'resolution': '1920x1080',
        'project' : "Kompot",
        'name': 'Smoke test',
        build: 'browserstack-build-1'
    }],
    coloredLogs: true,
    screenshotPath: './errorShots/',
    host: 'hub.browserstack.com',
    // Code to mark the status of test on BrowserStack based on the assertion status
}, { clone: false });
// Code to support common capabilities
// exports.config.capabilities.forEach(function(caps, index){
//     for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
//     exports.config.capabilities[index] = { ...caps, ...caps['browser'] && { browserName: caps['browser'] } };
// });