import { test, expect } from '@playwright/test'

test('select item from auto complete', async ({ page }) => {
    await page.goto("http://www.google.com")

    let accept = page.getByRole('button', { name: 'Accept all' })
    if (await accept.isVisible())
    {
        accept.click()
    }

    let textArea =  page.locator("textarea[name='q']")
    await textArea.focus()
    await textArea.fill("Ritesh")

    await page.waitForSelector("//li[@role='presentation']")
    
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")   
    await page.keyboard.press("Enter")
})

test('select item from auto complete 2', async ({ page }) => {
    await page.goto("http://www.google.com")

    let accept = page.getByRole('button', { name: 'Accept all' })
    if (await accept.isVisible())
    {
        accept.click()
    }

    let textArea =  page.locator("textarea[name='q']")
    await textArea.focus()
    await textArea.fill("Ritesh")

    await page.waitForSelector("//li[@role='presentation']")

    const selectors = await page.$$("//li[@role='presentation']")

    for (let index = 0; index < selectors.length; index++) {

        const element = selectors[index];

        const text = await element.textContent()
        
        if(text?.includes('Batra'))
        {
            await element.click()
            break
        }
    }

    await page.pause()
})
