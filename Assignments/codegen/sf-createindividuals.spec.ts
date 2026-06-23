//homeassignment for locators - Tried using codegen and storage state

import { test, expect } from '@playwright/test';

test.use({

    storageState: 'Data/Salesforcelogin.json'

})

test('test', async ({ page }) => {
   await page.goto('https://orgfarm-3d7a0a96b2-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('button', { name: 'View All Applications' }).click();
  await page.getByText('App LauncherSearch apps or').click();
  await page.getByRole('combobox', { name: 'Search apps or items...' }).fill('individuals');
  await page.getByRole('link', { name: 'Individuals' }).click();
  await page.getByRole('button', { name: 'Select a List View:' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('button', { name: 'Salutation --None--' }).click();
  await page.getByRole('option', { name: 'Mrs.' }).click();
  await page.getByRole('button', { name: 'Salutation Mrs.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('P');
  await page.getByRole('textbox', { name: 'Last Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Penmetsa');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
});