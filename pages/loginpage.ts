import { expect, Locator, Page } from '@playwright/test'

export class Login{

    // Define selectors
    readonly page: Page

    readonly username: Locator
    readonly password: Locator
    readonly signInButton: Locator

    constructor(page)
    {
        this.page=page
        this.username=page.locator("#email1")
        this.password=page.locator("#password1")
        this.signInButton=page.getByText("Sign in")
    }

    async verifyIfSignInButtonIsPresent(){
        await expect(this.signInButton.nth(1)).toBeVisible()
    }

    async loginToApplication(username_, password_)
    {
        await this.username.fill(username_)
        await this.password.fill(password_)
        //get second instance of element on page
        await this.signInButton.nth(1).click()
    }
}