import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.getByText('ENGPL').click();
	await expect(page.getByPlaceholder('Podaj dziedzinę quizu')).toBeVisible();
	await page.getByText('ENGPL').click();
	await expect(page.getByPlaceholder('Provide quiz topic')).toBeVisible();
});
