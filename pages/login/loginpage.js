import{test,expect} from ("@playwright/test")
export class loginpage{
    constructor(page){

        this.page=page
        //whenever we take constructor then we have to write some locators
        this.login="#login2"
        this.username="#loginusername"

        this.password='#loginpassword'
        this.loginButton='[onclick="logIn()"]'

    }
    async goto(url){
        await this.goto(url)

    }
    async clickloginbutton(){
        await this.locator(this.login).click()
    }
    async credientials(username,password){
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginButton).click()
    }
    
}