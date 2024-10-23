import { test, expect } from '@playwright/test'

test('Upload file', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles(".\\uploads\\VSShortcutKeys.pdf")

    await page.getByRole("button", {name:'Upload'}).click()

    await page.waitForTimeout(2000)    
})
