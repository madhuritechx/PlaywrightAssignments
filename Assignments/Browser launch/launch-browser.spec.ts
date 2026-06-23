//playwright introduction to launch browser

import {test,chromium} from "@playwright/test"

test("Launch Browser",async({page}) => {
//chromium base architecture
/* const browser=await chromium.launch()
const context=await  browser.newContext()
const page=await context.newPage() */

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.waitForTimeout(2000)
})