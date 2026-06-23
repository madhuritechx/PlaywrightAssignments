//Home assignment - Playwright locators

import { test } from '@playwright/test'

test("ParaBank Login", async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole("link", { name: "Forgot login info" }).click()
    await page.getByAltText("ParaBank").click()
    await page.getByRole('link', { name: 'Locations' }).nth(0).click()
    await page.getByRole("button").nth(1).click()
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByPlaceholder("Search Keywords").fill('CHENNAI')
})