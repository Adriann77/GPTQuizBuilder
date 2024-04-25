import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(page.getByText('This is required')).toBeVisible();
  await expect(page.getByText('Select diffucult level')).toBeVisible();
});
