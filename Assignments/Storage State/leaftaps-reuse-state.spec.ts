import { test, expect } from '@playwright/test';

test('reuse Leaftaps storage state using browsercontext', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'Data/LeaftapsStoragestate.json' });
  const page = await context.newPage();

  // navigate to app; context should already be authenticated
  await page.goto('https://leaftaps.com/opentaps/control/main');

  // validate user is logged in already
  await expect(page.locator('a:has-text("CRM/SFA")')).toBeVisible({ timeout: 10000 });
  await context.close();
});
