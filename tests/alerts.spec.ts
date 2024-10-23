import { test, expect } from '@playwright/test'

test('Handle Alert', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", async(dialogWindow) =>
    {
        expect(dialogWindow.type()).toContain("alert")
        expect(dialogWindow.message()).toContain("I am a JS Alert")
        await dialogWindow.accept()
    })

    await page.getByRole("button", {name: 'Click for JS Alert'}).click()

    await page.waitForTimeout(3000)
})

test('Handle Confirm', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    const dimiss = true

    page.on("dialog", async(dialogWindow) =>
    {
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        if (dimiss) {
            await dialogWindow.dismiss()
        }
        else{
            await dialogWindow.accept()
        }
    })

    await page.getByRole("button", {name: 'Click for JS Confirm'}).click()

    await page.waitForTimeout(3000)
})

test('Handle Prompt', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    const dimiss = false
    const message = "Helloe"

    page.on("dialog", async(dialogWindow) =>
    {
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain("I am a JS prompt")
        if (dimiss) {
            await dialogWindow.dismiss()
        }
        else{
            await dialogWindow.accept(message)
        }
    })

    await page.getByRole("button", {name: 'Click for JS Prompt'}).click()

    await page.waitForTimeout(3000)
})
