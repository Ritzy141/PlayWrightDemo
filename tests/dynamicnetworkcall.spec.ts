import { test, expect } from '@playwright/test'

test('dymanmic network call with muliple tabs', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.locator("//a[@class = 'subLink']").click()

    // await page.waitForLoadState("networkidle")

    const responsePromise =  page.waitForResponse("**/api/categories")

    const response = await responsePromise;

    const checkCount = await page.locator("//input[@type='checkbox']").count()

    await expect(checkCount).toBe(7)

    await page.waitForTimeout(2000)
})
