import { Page } from '@playwright/test';
export class CartPage {
constructor(private page: Page) {}

  // Locators
  shoesLink = () => this.page.getByRole('link', { name: 'Shoes' });
  addToCartButton = () => this.page.getByRole('link', { name: 'Add to Cart' });
  tshirtsLink = () => this.page.getByRole('link', { name: 'T-shirts' });
  checkoutButton = () => this.page.locator('#cart_checkout1');
  // Methods
  async launchApplication() {
    await this.page.goto('https://automationteststore.com/index.php?rt=account/login');
    await this.page.waitForLoadState('networkidle');
  }
  async addShoesToCart() {
    await this.shoesLink().click();
    await this.page.waitForLoadState('networkidle');
    await this.page.getByTitle('Add to Cart').first().click();
    await this.addToCartButton().click();
  }

  async addTshirtToCart() {
  await this.tshirtsLink().click();
  await this.page.waitForLoadState('networkidle');
  await this.page.getByTitle('Add to Cart').nth(1).click();
  await this.page.locator('#option353').selectOption('782');
  await this.page.locator('#product_quantity').fill('1');
  await this.addToCartButton().click();
  }
  async clickCheckout() {
    await this.checkoutButton().click();
  }
}
