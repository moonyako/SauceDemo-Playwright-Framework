import { test } from "../fixtures/my-test-base";

test.describe("Verify product page texts", () => {
  test("Verify product page header components", async ({
    loginPage,
    productsPage,
  }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.verifyLogoIsVisible();
    await productsPage.verifyTitleIsVisible();
  });
});
