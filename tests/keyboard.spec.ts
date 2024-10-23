import { test, expect } from '@playwright/test'

test('keyboard events', async ({ page }) => {
    await page.goto("https://www.google.co.uk/")

    let accept = page.getByRole('button', { name: 'Accept all' })
    if (await accept.isVisible())
    {
        accept.click()
    }

    let textArea =  page.locator("textarea[name='q']")
    await textArea.focus()
    await textArea.fill("Ritesh")
    await page.keyboard.press("Enter")

    await page.waitForTimeout(5000) 
})

test('keyboard events 2', async ({ page }) => {
    await page.goto("https://www.google.co.uk/")

    let accept = page.getByRole('button', { name: 'Accept all' })
    if (await accept.isVisible())
    {
        accept.click()
    }

    let textArea =  page.locator("textarea[name='q']")
    await textArea.focus()
    await textArea.pressSequentially("Ritesh", {delay:200})
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")

    await page.waitForTimeout(5000) 
})

