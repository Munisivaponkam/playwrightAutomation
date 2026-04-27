import {test} from "@playwright/test"
import testdata from "../testdata/demoBlaze/demo_Blaze_test_data.json"
import {LogInPage} from '../pages/demopages/login'
import { SingInPage } from "../pages/demopages/singInPage"
import {CategoryPhones} from "../pages/demopages/phones"

test('verify and validate the demo site', async ({ page })=>{
    const loginPage = new LogInPage(page)
    const singInPage = new SingInPage(page)
    const categoryPhones=new CategoryPhones(page)
    await loginPage.verifyLoginValidations()
    await singInPage.verifySingInFlow()
    await singInPage.EnterLoginValidCredientials(
        testdata.username,testdata.password)
        
    await singInPage.clickOnLoginButton()
   await categoryPhones.cartingPhones()



    await page.pause()
})