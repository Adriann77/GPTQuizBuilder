import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.getByPlaceholder('Provide quiz topic').click();
	await page.getByPlaceholder('Provide quiz topic').fill('biologia');
	await page.getByRole('combobox').selectOption('intermediate');
	await page.getByRole('slider').fill('6');
	await page.getByRole('button', { name: 'Confirm' }).click();
	await expect(
		page.getByText('GPT-QuizBuilderSign In✕Log inDont have account yet?Register now!Your quiz is'),
	).toBeVisible();


});
