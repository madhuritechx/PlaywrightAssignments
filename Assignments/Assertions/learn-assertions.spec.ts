import {test, expect} from '@playwright/test'

test("Learn Playwright assertions", async ({page}) => {
await page.goto('https://leaftaps.com/opentaps/control/main')

//expect is used for validations and verifications
//Locator Assertion-retries (default 5seconds)
await expect(page.locator('#username')).toBeVisible()
await expect(page.locator('#username')).toBeEnabled()

//by default hard assertion stops execution
//fails, execution stopped. its retried many times and timedout after 5seconds
//timeout can be overridden for expect
// await expect(page.locator('#username')).toBeDisabled({timeout:8000}) 

//Soft Assertion - Execution continues even if the line fails. 
await expect.soft(page.locator('#username')).toBeDisabled()

const textboxstatus = await page.locator('#username').isEditable()

//generic assertion - will not perform retries
expect (textboxstatus).toBeTruthy()
const Title = await page.title()
console.log(Title)
const Url = await page.url()
console.log(Url)

expect(Title).toBe('Leaftaps - TestLeaf Automation Platform')
expect(Url).toContain('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill("demoscr2")
})