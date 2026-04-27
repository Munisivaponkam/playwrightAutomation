
import {page,expect} from "@playwright/test"
export class LoginPage {
 
  constructor(page) {
    this.page = page;

    // Locators
    this.loginButton='[id="login2"]'
    this.usernameInput = '#loginusername'
    this.passwordInput = '[id="loginpassword"]'
    this.submitButton = "//button[text()='Log in']"
  }

  async goto(urlLink) {
    await this.page.goto(urlLink)
  }
  async clickLoginButton(){
        await this.page.click(this.loginButton)

  }

  async login(hari,krishna) {
  //enter the login credientials 
    await this.page.locator(this.usernameInput).fill(hari)
    await this.page.locator(this.passwordInput).fill(krishna)
    
    //after entering the valid crediential then perform to click the login button
    await this.page.locator(this.submitButton).click()
  }

  async verifyText(){
     const user=await this.page.locator("//a[text()='Welcome munisiva']")
    await expect(user).toBeVisible()
  }
}
