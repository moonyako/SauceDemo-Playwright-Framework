import { Page, Locator, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly headerLogo: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.headerLogo = page.locator(".app_logo");
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async verifyTitleIsVisible() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.pageTitle).toHaveText("Products");
  }

  async verifyLogoIsVisible() {
    await expect(this.headerLogo).toBeVisible();
    await expect(this.headerLogo).toHaveText("Swag Labs");
  }

  // Convert the product name to match SauceDemo's data-test format.
  async addToCart(productName: string) {
    const formattedName = productName.trim().toLowerCase().replace(/\s+/g, "-");
    await this.page
      .locator(`[data-test="add-to-cart-${formattedName}"]`)
      .click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}
