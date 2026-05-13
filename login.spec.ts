import { test, expect } from '@playwright/test';
test('Login and Forgot Password', async ({ page }) => {

  // Open application
  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  // Wait for page load
  await page.waitForLoadState('networkidle');

  // ---------------- LOGIN ----------------

  // Enter username
  await page.locator('#loginFrm_loginname').fill('testuser');

  // Enter password
  await page.locator('#loginFrm_password').fill('Password123');

  // Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Validation after login
  await expect(page).toHaveURL(/account/);

});
