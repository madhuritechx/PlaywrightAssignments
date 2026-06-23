// To check my browser execution errors

import { test, chromium, webkit, firefox } from '@playwright/test';

test('check browser paths', async () => {

  console.log('Chromium:', chromium.executablePath());
  console.log('Firefox:', firefox.executablePath());
  console.log('WebKit:', webkit.executablePath());

});