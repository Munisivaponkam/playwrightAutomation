import{test,expect} from "@playwright/test"
import demotestdata from "../../testdata/demoBlaze/demo_Blaze_test_data.json"

export class CategoryPhones{
    
    constructor(page){
        this.page=page
        this.phoneLink="//a[text()='Phones']"
        this.mobileName="//a[text()='Nexus 6']"
        this.addCart='[onclick="addToCart(3)"]'
        this.cartLink="#cartur"
        this.placeOrder='[class="btn btn-success"]'
        this.pName="#name"
        this.pCountry="#country"
        this.pCity="#city"
        this.pCard="#card"
        this.pMonth='#month'
        this.pYear='#year'
        this.purchase="//button[text()='Purchase']"
        this.okButton="//button[text()='OK']"
    }

    async cartingPhones(){
        await this.clickOnPhoneTab()
        await this.selectOne()
        await this.addCartButton()
        await this.clickOnCartLink()
        await this.clickOnPlaceOrder()
        await this.placeOrderDetails()
        await this.clickOkButton()
    }

    async clickOnPhoneTab(){
        await this.page.locator(this.phoneLink).click()
    }

    async selectOne(){
       await this.page.locator(this.mobileName).click()
    }

    async addCartButton(){
        await this.page.on("dialog",async dialog=>{
        await dialog.accept()
    })
        await this.page.locator(this.addCart).click()
    }

    async clickOnCartLink(){
        await this.page.locator(this.cartLink).click()
    }

    async clickOnPlaceOrder(){
        await this.page.locator(this.placeOrder).click()
    }

    async placeOrderDetails(){
        await this.page.locator(this.pName).fill(demotestdata.name)
        await this.page.locator(this.pCountry).fill(demotestdata.country)
        await this.page.locator(this.pCity).fill(demotestdata.city)
        await this.page.locator(this.pCard).fill(demotestdata.creditcard)
        await this.page.locator(this.pMonth).fill(demotestdata.month)
        await this.page.locator(this.pYear).fill(demotestdata.year)
        await this.page.locator(this.purchase).click()
    }

    async clickOkButton(){
        await this.page.locator(this.okButton).click()
    }
}