import test from '@playwright/test'

test.use({

    storageState: 'Data/Salesforcelogin.json'

})

test('Skip salesforce login using storageState', async ({ page }) => {

    await page.goto('https://orgfarm-3d7a0a96b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
    await page.locator('//span[text()="App Launcher"]').click()
})