import { test, expect } from '@playwright/test'

import testdata from '../data/testdata.json'

test('dymanmic network call with muliple tabs', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const email = page.getByPlaceholder("Enter Email")

    const password = page.getByPlaceholder("Enter Password")

    const submit = page.locator("//button[@class ='submit-btn']")

    await email.fill(testdata.username)

    await password.fill(testdata.password)

    await page.waitForTimeout(2000)

})
