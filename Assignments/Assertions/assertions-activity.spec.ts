import { test, expect } from '@playwright/test'

test("assertions", async ({ page }) => {
    await page.goto('https://leafground.com/input.xhtml')
    //check diswabled text box
    await expect(page.locator('[id="j_idt88:j_idt93"]')).toBeDisabled();
    //check editable inout field
    await expect(page.locator('[id="j_idt88:name"]')).toBeEditable();

    // Soft Assertion - Execution continues even if the line fails. 
    await expect.soft(page.locator('[id="j_idt88:name"]')).toBeDisabled()

    //fill the ediatble input field
    await page.locator('[id="j_idt88:name"]').clear()
    await page.locator('[id="j_idt88:name"]').fill('Playwright Learning')
    console.log("Assertions Practice completed")
    const Title = await page.title()
    console.log(Title)
    const Url = page.url()
    console.log(Url)

})