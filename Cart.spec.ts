mport { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('Add products to cart and checkout', async ({ page }) => {

  const cartPage = new CartPage(page);

  // Launch application
  await cartPage.launchApplication();

  // Add shoes product
  await cartPage.addShoesToCart();

  // Add T-shirt product
  await cartPage.addTshirtToCart();

  // Checkout
  await cartPage.clickCheckout();

  // Validation
  await expect(page).toHaveURL(/checkout/);
});
