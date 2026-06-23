import test from '@playwright/test'

test('leaftaps storage state', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('demoCSR2')
    await page.locator('.inputLogin').nth(1).fill('crmsfa')
    await page.locator('[class="decorativeSubmit"]').click()
    await page.locator('text=CRM/SFA').click()
    // Data folder is created with Json file when the code runs
    await page.context().storageState({ path: 'Data/Leaftapslogin.json' });
    await page.waitForTimeout(30000);

})