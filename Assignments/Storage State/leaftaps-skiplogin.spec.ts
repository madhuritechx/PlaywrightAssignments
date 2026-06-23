import test from '@playwright/test'

test.use({

    storageState: 'Data/Leaftapslogin.json'

})

test('Skip login using storageState', async ({ page }) => {

    await page.goto('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL112239344835')
    await page.locator('//a[text()="Leads"]').click()
})