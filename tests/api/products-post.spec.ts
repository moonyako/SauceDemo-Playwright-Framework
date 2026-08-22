import { test, expect } from '@playwright/test';

test('should create a new product', async ({ request }) => {
  const newProduct = {
    title: 'QA Automation Test Product',
    description: 'Product created for API automation testing',
    price: 29.99,
    category: 'beauty',
  };
  const response = await request.post('/products/add', {
    data: newProduct,
  });
  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.id).toBeGreaterThan(0);
  expect(body.title).toBe(newProduct.title);
  expect(body.description).toBe(newProduct.description);
  expect(body.price).toBe(newProduct.price);
  expect(body.category).toBe(newProduct.category);
});
