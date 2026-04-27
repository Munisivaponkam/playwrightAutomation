import {test,expect} from "@playwright/test"
import autotestdata from "../../testdata/AutomationPractice/Registertestdata.json"

export class RegisterPage{

    constructor(page){
        this.page=page
        this.signupLink="//a[text()=' Signup / Login']"
        this.signUpName='[name="name"]'
        this.signUpEmail='(//input[@name="email"])[2]'
        this.signButton='[data-qa="signup-button"]'
        this.verifyaccount="//b[text()='Enter Account Information']"
        this.gender="#id_gender1"
        this.password="#password"
        this.day="#days"
        this.month="#months"
        this.year="#years"
        this.newsletter='//input[@name="newsletter"]'
        this.letter="#optin"
        this.adfirstName="#first_name"
        this.adLastName="#last_name"
        this.adCompany="#company"
        this.address1="#address1"
        this.address2="#address2"
        this.countryDropDown="#country"
        this.adState="#state"
        this.adCity="#city"
        this.adZipcode="#zipcode"
        this.adMobile="#mobile_number"
        this.createAccount='[data-qa="create-account"]'

    }
    async registerDetais(){
        await this.goto()
        await this.clickOnSignupLInk()
        await this.enterCrediential()
        await this.verifyEnterAccountInformation()
        await this.enterAccountInformation()
        await this.enterAddressDetails()
        await this.clickOnCreateButton()
    }
    async goto(){
        await this.page.goto(autotestdata.url)
    }
    async clickOnSignupLInk(){
        await this.page.locator(this.signupLink).click()
    }
    async enterCrediential(){
        await this.page.locator(this.signUpName).fill(autotestdata.signupname)
        await this.page.locator(this.signUpEmail).fill(autotestdata.signupemail)
        await this.page.locator(this.signButton).click()

    }
    async verifyEnterAccountInformation(){
        await expect(await this.page.locator(this.verifyaccount)).toBeVisible()
    }
    async enterAccountInformation(){
        await this.page.locator(this.gender).check()
        await this.page.locator(this.password).fill(autotestdata.password)
        await this.page.locator(this.day).selectOption(autotestdata.day)
        await this.page.locator(this.month).selectOption(autotestdata.month)
        await this.page.locator(this.year).selectOption(autotestdata.year)
         await this.page.locator(this.newsletter).check()
         await this.page.locator(this.letter).check()
    }
    async enterAddressDetails(){
        await this.page.locator(this.adfirstName).fill(autotestdata.firstname)
        await this.page.locator(this.adLastName).fill(autotestdata.lastname)
        await this.page.locator(this.adCompany).fill(autotestdata.company)
        await this.page.locator(this.address1).fill(autotestdata.address1)
        await this.page.locator(this.address2).fill(autotestdata.address2)
        await this.page.locator(this.countryDropDown).selectOption("Israel")
        await this.page.locator(this.adState).fill(autotestdata.state)
        await this.page.locator(this.adCity).fill(autotestdata.city)
        await this.page.locator(this.adZipcode).fill(autotestdata.zipcode)
        await this.page.locator(this.adMobile).fill(autotestdata.mobilenumber)

        
    }
    async clickOnCreateButton(){
        await this.page.locator(this.createAccount).click()
    }
    
    
}