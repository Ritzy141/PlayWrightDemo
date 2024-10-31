import { test, expect } from '@playwright/test'
import { Login }  from '../pages/loginpage'
import { HomePage } from '../pages/homepage'

test('Login to application using POM', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    let loginPage: Login
    let homePage: HomePage

    loginPage = new Login(page)

    await loginPage.loginToApplication("admin@email.com", "admin@123")

    await page.waitForSelector("//button[@class='cartBtn']")

    const responsePromise =  page.waitForResponse("**/api/courses")

    const response = await responsePromise;

    homePage = new HomePage(page)

    await homePage.verifyIfManageLinkIsPresent()
    
    await homePage.logoutOfApplication()

    await loginPage.verifyIfSignInButtonIsPresent()

    // await page.waitForTimeout(1000)
});