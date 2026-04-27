import {test,expect} from "@playwright/test"
import demotestdata from "../../testdata/demoBlaze/demo_Blaze_test_data.json"


export class SingInPage{

    constructor(page){
        this.page=page
        this.loginTb='//a[@id="login2"]'
       this.username="#loginusername"
       this.password='#loginpassword'
       this.loginButton='//button[@onclick="logIn()"]'
    }

    async verifySingInFlow(){
        this.clickSingInTab()
        // this.EnterLoginValidCredientials()
        // this.clickOnLoginButton()
    }

    async clickSingInTab(){
       await this.page.locator(this.loginTb).click()
    }
    async EnterLoginValidCredientials(uname,pname){
        await this.page.locator(this.username).fill(uname)
        await this.page.locator(this.password).fill(pname)
    }

    async clickOnLoginButton(){
        await this.page.locator(this.loginButton).click()
    }

}