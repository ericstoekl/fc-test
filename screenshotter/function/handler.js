"use strict"
const puppeteer = require('puppeteer');

module.exports = (context, callback) => {
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--headless', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.goto(context);
  const screenshotBuffer = await page.screenshot({path: 'example.png'});
  process.stdout.write(screenshotBuffer)

  await browser.close();
})();
}
