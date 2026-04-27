import {expect} from "@playwright/test"
import demotestdata from "../../testdata/demoBlaze/demo_Blaze_test_data.json"
export class LogInPage{

    constructor(page){
        this.page=page
        this.title = '//a[@id="nava"]'
        this.homeTab = '//a[contains(text(),"Home")]'
    }

    async verifyLoginValidations(){
        await this.lannchTheApplication()
        await this.verifyLoginPage()
        await this.verifyHomeTab()
    }

    async lannchTheApplication(){
       await this.page.goto(demotestdata.url)
    }
    async verifyLoginPage(){
        await expect(this.page.locator(this.title)).toBeVisible()
    }
    async verifyHomeTab(){
        await expect(this.page.locator(this.homeTab)).toBeVisible()
    }

}