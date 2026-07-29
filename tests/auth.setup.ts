import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');

  await page.waitForURL("**/inventory.html");

  await page.context().storageState({
    path: authFile,
  });
});
