//classroom activity - Playwright locators

import { test } from '@playwright/test'

test("Learn Playwright Locators", async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.getByRole("textbox", { name: 'Username', exact: true }).fill('dilipkumar.rajendran@testleaf.com');
    await page.getByLabel("Password", { exact: true }).fill('Testleaf@2025');
    await page.getByRole('button', { name: "Log In" }).click()
    await page.getByTitle("App Launcher", { exact: true }).click()
    await page.getByText("View All", { exact: true }).nth(2).click()
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill('leads')

})