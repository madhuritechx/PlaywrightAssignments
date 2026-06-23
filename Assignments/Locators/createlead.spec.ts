//Homeassignment - Locators - Create Lead

import { test } from '@playwright/test'

test('create lead', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('.inputLogin').nth(1).fill('crmsfa')
    await page.locator('[class="decorativeSubmit"]').click()
    await page.locator('text=CRM/SFA').click()
    //xpaths
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()

    await page.locator('(//input[@name="companyName"])[2]').fill("Testleaf")
    await page.locator('(//input[@name="firstName"])[3]').fill("Madhuri")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Penmetsa")
    await page.locator("#createLeadForm_personalTitle").fill("Ms.")
    await page.locator("#createLeadForm_generalProfTitle").fill(" Engineer")
    await page.locator("#createLeadForm_annualRevenue").fill("500000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("123456789")

    await page.locator('input[value="Create Lead"]').click()

})
