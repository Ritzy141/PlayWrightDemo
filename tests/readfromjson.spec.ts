import { test, expect } from '@playwright/test'

import testdata from '../data/testdataarray.json'

test.describe("Data Driven login tests", function()
{
    for (const data of testdata) {
        test.describe(`Login with users ${data.id}`, function()
        {
            test(`Test Login with mulitple records: ${data.username} `, async ({ page }) => {

                await page.goto('https://freelance-learn-automation.vercel.app/login');
            
                const email = page.getByPlaceholder("Enter Email")
            
                const password = page.getByPlaceholder("Enter Password")
            
                await email.fill(data.username)
            
                await password.fill(data.password)
            
                await page.waitForTimeout(2000)
            })
            
        })
    }
})