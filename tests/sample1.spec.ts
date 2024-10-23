import { test, expect } from '@playwright/test'

test("Verify Application Title", async({page}) => {
    await page.goto('http://www.google.co.uk')

    await expect(page).toHaveTitle('Google')
})