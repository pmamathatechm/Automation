import { test, expect } from '@playwright/test';
test('Add Shoes and T-Shirt to cart', async ({ page }) => {

  // Open application
  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  // Wait for page load
  await page.waitForLoadState('networkidle');

  // ---------------- ADD SHOES ----------------

  // Hover on Apparel & Accessories
  await page.getByRole('link', { name: 'APPAREL & ACCESSORIES' }).hover();
  // Click Shoes from dropdown
  await page.getByRole('link', { name: 'Shoes' }).click();

  // Wait for products page
  await page.waitForLoadState('networkidle');

  // Add first shoe product to cart
  await page.getByTitle('Add to Cart').first().click();

  // ---------------- ADD T-SHIRT ----------------

  // Hover again on Apparel & Accessories
  await page.getByRole('link', { name: 'APPAREL & ACCESSORIES' }).hover();

  // Click T-shirts from dropdown
  await page.getByRole('link', { name: 'T-shirts' }).click();
  // Wait for T-shirt page
  await page.waitForLoadState('networkidle');
  // Open second T-shirt product
  await page.getByTitle('Add to Cart').nth(1).click();
  // Select size if dropdown available
  await page.locator('#option353').selectOption('782');
  // Enter quantity
  await page.locator('#product_quantity').fill('1');
  // Add T-shirt to cart
  await page.getByRole('link', { name: 'Add to Cart' }).click();

  // Click cart
  await page.locator('.dropdown-toggle .fa-shopping-cart').click();
  // Validation
  await expect(page.locator('#cart')).toBeVisible();
});
