import { expect, Locator, Page } from '@playwright/test'

export class HomePage{

    // Define selectors
    readonly page: Page

    readonly burgerMenu: Locator
    readonly signout: Locator
    readonly manageLink: Locator

    constructor(page)
    {
        this.page=page
        this.burgerMenu=page.locator("//img[@alt='menu']")
        this.signout=page.locator("//button[@class='nav-menu-item']")
        this.manageLink=page.locator("//span[normalize-space()='Manage']")
    }

    async verifyIfManageLinkIsPresent(){
        await expect(this.manageLink).toBeVisible()
    }

    async logoutOfApplication()
    {
        await this.burgerMenu.click()
        await this.signout.click()
    }
}