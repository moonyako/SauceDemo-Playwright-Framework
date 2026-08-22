import { test, expect } from '@playwright/test';

test('should get all products', async ({ request }) => {
  const response = await request.get('/products');

  expect(response.status()).toBe(200);

  const body = await response.json();
  const firstProduct = body.products[0];

  expect(firstProduct).toHaveProperty('id');
  expect(firstProduct).toHaveProperty('title');
  expect(firstProduct).toHaveProperty('price');

  expect(firstProduct.id).toBeGreaterThan(0);
  expect(firstProduct.title).toBeTruthy();
  expect(firstProduct.price).toBeGreaterThan(0);
});
