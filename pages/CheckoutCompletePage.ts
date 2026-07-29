import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutCompletePage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly successMessage: Locator;
  readonly confirmationMessage: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator('[data-test="title"]');
    this.successMessage = page.locator('[data-test="complete-header"]');
    this.confirmationMessage = page.locator('[data-test="complete-text"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async verifyOrderCompleted(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete\.html/);
    await expect(this.pageTitle).toContainText("Checkout: Complete!");
    await expect(this.successMessage).toHaveText("Thank you for your order!");
    await expect(this.confirmationMessage).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
    );
    await expect(this.backHomeButton).toBeVisible();
  }

  async clickBackHome(): Promise<void> {
    await this.backHomeButton.click();
  }
}
