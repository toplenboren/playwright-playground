import { test, expect } from '@playwright/test';

test('website opens', async ({ page }) => {
    await page.goto('https://condo.d.doma.ai/');
    await page.goto('https://condo.d.doma.ai/auth/signin?next=%2F');
    await page.getByPlaceholder('+1 (300) 300 22').click();
    await page.getByPlaceholder('+1 (300) 300 22').fill('+7 (902) 586-89-02');
    await expect(page.locator('img').nth(4)).toBeVisible();
});
