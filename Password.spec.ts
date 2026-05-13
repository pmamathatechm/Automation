import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {

  // Open application
  await page.goto('https://automationteststore.com/index.php?rt=account/login');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Click continue button
  await page.getByRole('button', { name: 'Continue' }).click();

  // Wait for registration form
  await page.waitForSelector('#AccountFrm_firstname');

  // Fill registration details
  await page.locator('#AccountFrm_firstname').fill('Mamatha');

  await page.locator('#AccountFrm_lastname').fill('P');

  await page.locator('#AccountFrm_email')
    .fill('p.mamatha160@gmail.com');

  await page.locator('#AccountFrm_address_1')
    .fill('2-13');

  await page.locator('#AccountFrm_country_id')
    .selectOption('99');

  await page.locator('#AccountFrm_city')
    .fill('Andhrapradesh');

  await page.locator('#AccountFrm_zone_id')
    .selectOption('1476');

  await page.locator('#AccountFrm_postcode')
    .fill('515575');

  await page.locator('#AccountFrm_loginname')
    .fill('Mamatha');

  await page.locator('#AccountFrm_password')
    .fill('Sahasam@1234');

  await page.locator('#AccountFrm_confirm')
    .fill('Sahasam@1234');

  // Optional checkbox
  await page.locator('#AccountFrm_newsletter0').check();

  // Wait before clicking submit
  await page.waitForTimeout(2000);

  // Click Register button
  await page.getByTitle('Continue').click();

  // Validation
  await expect(page).toHaveURL(/success/);

});