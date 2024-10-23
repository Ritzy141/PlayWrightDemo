import { test, expect } from '@playwright/test'

test('Valid Login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder("Username").fill('Admin')

    await page.locator("input[placeholder='Password']").fill('admin123')

    // await page.locator("button[type='submit']").click()
    // OR
    // await page.locator(".orangehrm-login-button").click()
    // OR
    await page.locator("//button[contains(@class, 'orangehrm-login-button')]").click()

    await page.waitForSelector("//h6[contains(@class, 'oxd-topbar-header-breadcrumb-module')]")

    await expect(page).toHaveURL(/dashboard/)
});


