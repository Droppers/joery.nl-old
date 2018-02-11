const prerender = require('prerender');

const server = prerender({
    chromeLocation: '/root/joery.nl/front/node_modules/puppeteer/.local-chromium/linux-526987/chrome-linux/chrome'
});

server.start();