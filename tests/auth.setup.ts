import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/");
  await page.fill('[data-test="username"]', process.env.SAUCE_USERNAME ?? "");
  await page.fill('[data-test="password"]', process.env.SAUCE_PASSWORD ?? "");
  await page.click('[data-test="login-button"]');

  await page.waitForURL("**/inventory.html");

  await page.context().storageState({
    path: authFile,
  });
});
