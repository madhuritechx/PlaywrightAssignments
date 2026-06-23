//Homeassignment - Launch redbus andFlipkart in 2 browsers

import { test, chromium, webkit } from '@playwright/test';

test('launch RedBus in Edge and Flipkart in WebKit', async () => {
  // Edge browser instance
  const edgeBrowser = await chromium.launch({ channel: 'msedge', headless: false });
  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  await edgePage.goto('https://www.redbus.in');
  console.log('RedBus title:', await edgePage.title());
  console.log('RedBus URL:', edgePage.url());

  await edgeBrowser.close();

  // WebKit browser instance
  const webkitBrowser = await webkit.launch({ headless: false });
  const webkitContext = await webkitBrowser.newContext();
  const webkitPage = await webkitContext.newPage();

  await webkitPage.goto('https://www.flipkart.com');
  console.log('Flipkart title:', await webkitPage.title());
  console.log('Flipkart URL:', webkitPage.url());

  await webkitBrowser.close();
});

