import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartList: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly cartItem: Locator;
  readonly cartItemName: Locator;
  readonly cartItemPrice: Locator;
  readonly cartItemQuantity: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartList = page.locator('[data-test="cart-list"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]',
    );
    this.cartItem = page.locator('[data-test="inventory-item"]');
    this.cartItemName = page.locator('[data-test="inventory-item-name"]');
    this.cartItemPrice = page.locator('[data-test="inventory-item-price"]');
    this.cartItemQuantity = page.locator('[data-test="item-quantity"]');
    this.removeButton = page.getByRole("button", { name: "Remove" });
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  // Locate the cart item by product name to ensure the correct item is removed.
  async removeProductByName(productName: string) {
    const item = this.cartList.locator('[data-test="inventory-item"]', {
      hasText: productName,
    });

    await item.getByRole("button", { name: "Remove" }).click();
  }

  async getCartItemCount(): Promise<number> {
    await this.cartItem.first().waitFor();
    return this.cartItem.count();
  }
}
