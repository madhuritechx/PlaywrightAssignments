//Classroom activity - Locators - Create lead on salesforce page

import { test } from '@playwright/test'

test('salesforce login', async ({ page }) => {
	await page.goto('https://login.salesforce.com/');
	await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
	await page.locator('#password').fill('Testleaf@2025');
	await page.locator('#Login').click();
	const pageTitle = await page.title();
	console.log(pageTitle);
	if (pageTitle === 'Login | Salesforce') {
		console.log('Salesforce page login succesful');
	} else {
		console.log('page not loaded');
	}
});