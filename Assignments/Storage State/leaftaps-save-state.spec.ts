import { test } from '@playwright/test';

test('save Leaftaps authenticated storage state', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.locator('#username').fill('demoCSR2');
  await page.locator('#password').fill('crmsfa');
  await page.locator('input[value="Login"]').click();

  // save authenticated storage state
  await context.storageState({ path: 'Data/LeaftapsStoragestate.json' });
  await context.close();
});
