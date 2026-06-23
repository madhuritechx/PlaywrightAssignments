import test from '@playwright/test'

test('salesforce storage state', async ({ page }) => {

    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill('madhuritechx.8fa4004de2f2@agentforce.com');
    await page.locator('#password').fill('learntech@23');
    await page.locator('#Login').click();
    // Data folder is created with Json file when the code runs
    await page.context().storageState({ path: 'Data/Salesforcelogin.json' });
    await page.waitForTimeout(30000);

})