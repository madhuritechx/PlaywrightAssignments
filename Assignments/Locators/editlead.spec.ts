//Homeassignment - Locators - EditLead

import { test } from '@playwright/test'

test('Edit Lead', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('.inputLogin').nth(1).fill('crmsfa')
    await page.locator('[class="decorativeSubmit"]').click()
    await page.locator('text=CRM/SFA').click()
    //Create Lead
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()

    await page.locator('(//input[@name="companyName"])[2]').fill("Testleaf")
    await page.locator('(//input[@name="firstName"])[3]').fill("Madhuri")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Penmetsa")

    await page.locator('input[value="Create Lead"]').click()
    //Edit Lead
    await page.locator('//a[text()="Edit"]').click()
    await page.waitForLoadState('load')
    await page.locator('#updateLeadForm_companyName').clear()
    await page.locator('#updateLeadForm_companyName').fill("QEAGLE")
    await page.locator('//input[@value="Update"]').click()


})