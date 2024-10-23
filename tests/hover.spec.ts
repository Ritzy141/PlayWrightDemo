import { test, expect } from '@playwright/test'

test('Test hover', async ({ page }) => {

    await page.goto('https://json2ts.com/')

    await page.locator("(//span[@class='mr-1'][normalize-space()='EN'])[1]").hover()

    await page.getByText('CHINESE').first().click()
    
    await page.waitForTimeout(2000)
    
})
