import { test, expect } from '@playwright/test'

test('wokring with muliple tabs', async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const [newPage] = await  Promise.all([
        context.waitForEvent('page'),
        page.locator("//div[@class='social']//div[@class='social-btns']//a[contains(@href, 'facebook')]").click()
    ])

    const cookies = newPage.getByRole('button', { name: 'Allow all cookies' })
    await cookies.waitFor()
    if(await cookies.isVisible())
    {
        await cookies.click()
    }
    await newPage.waitForSelector("//label//div//span//following-sibling::input[@name ='email']")

    await newPage.locator("//label//div//span//following-sibling::input[@name ='email']").fill("rp@homt.com")

    await newPage.waitForTimeout(2000)

    await newPage.close()

    await page.getByPlaceholder("Enter Email").fill("gg@gg.com")

    await page.waitForTimeout(2000)
})
