import { test, expect } from '@playwright/test';

test('Changing the language works as expected', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByText('ENGPL').click();
  await expect(page.getByPlaceholder('Podaj dziedzinę quizu')).toBeVisible();
  await page.getByText('ENGPL').click();
  await expect(page.getByPlaceholder('Provide quiz topic')).toBeVisible();
});
