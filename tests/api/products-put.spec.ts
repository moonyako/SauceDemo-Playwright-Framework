import { test, expect } from '@playwright/test';

test('should update product', async ({ request }) => {
  const updatedProduct = {
    title: 'Updated Product Title',
    description: 'Updated product description',
    price: 39.99,
    category: 'electronics',
  };
  const response = await request.put('/products/1', { data: updatedProduct });
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.title).toBe(updatedProduct.title);
  expect(body.description).toBe(updatedProduct.description);
  expect(body.price).toBe(updatedProduct.price);
  expect(body.category).toBe(updatedProduct.category);
});
