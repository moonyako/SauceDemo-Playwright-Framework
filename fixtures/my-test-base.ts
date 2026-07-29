// Custom Playwright fixtures shared across test files.
import { test as base } from "@playwright/test";

import { CartPage } from "../pages/CartPage";
import { CheckoutInfoPage } from "../pages/CheckoutInfoPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

type PageFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutInfoPage: CheckoutInfoPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await use(loginPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutInfoPage: async ({ page }, use) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);
    await use(checkoutInfoPage);
  },

  checkoutOverviewPage: async ({ page }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await use(checkoutOverviewPage);
  },

  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await use(checkoutCompletePage);
  },
});

export { expect } from "@playwright/test";
