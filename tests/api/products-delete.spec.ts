import { test, expect } from '@playwright/test';

test('should delete product', async ({ request }) => {
  const response = await request.delete('/products/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.isDeleted).toBe(true);
  expect(body.deletedOn).toBeTruthy();
});
