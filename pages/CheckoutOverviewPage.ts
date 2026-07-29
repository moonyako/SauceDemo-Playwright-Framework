import { Page, Locator, expect } from "@playwright/test";

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly finishButton: Locator;
  readonly itemTotal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.locator('[data-test="finish"]');
    this.itemTotal = page.locator(".summary_total_label");
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async verifyTotal(expectedTotal: string) {
    await expect(this.itemTotal).toContainText(expectedTotal);
  }
}
