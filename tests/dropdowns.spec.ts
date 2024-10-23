import { test, expect } from '@playwright/test'

test('Select values from dropdown', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup')

    await page.locator("#state").selectOption({label:'Goa'})
    await page.waitForTimeout(3000)

    await page.locator("#state").selectOption({value:'Gujarat'})
    await page.waitForTimeout(3000)

    await page.locator("#state").selectOption({index:4})
    await page.waitForTimeout(3000)

    let state = await page.$('#state')

    let options = await state?.$$('option')

    for (let index = 0; index < options!.length; index++) {
        let option = options![index]
        console.log(await option.textContent())
    } 

    await page.waitForTimeout(2000)
})
