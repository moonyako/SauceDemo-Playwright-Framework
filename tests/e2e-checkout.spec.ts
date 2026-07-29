import { test } from "../fixtures/my-test-base";

test("Happy Path: User can complete a full purchase", async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutInfoPage,
  checkoutOverviewPage,
  checkoutCompletePage,
}) => {
  // Arrange
  await loginPage.login("standard_user", "secret_sauce");

  // Act - Build the shopping cart
  await productsPage.addToCart("Sauce Labs Backpack");
  await productsPage.goToCart();
  await cartPage.clickCheckout();

  // Act - Provide customer information
  await checkoutInfoPage.fillInfo("Test", "User", "12345");
  await checkoutInfoPage.clickContinue();

  // Assert - Verify order summary
  await checkoutOverviewPage.verifyTotal("$32.39");

  // Act - Complete the purchase
  await checkoutOverviewPage.clickFinish();

  // Assert - Verify order completion
  await checkoutCompletePage.verifyOrderCompleted();
});
