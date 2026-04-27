const {test,expect}=require('@playwright/test')
import munisivatestdata from "../testdata/logintestdata.json"

import { LoginPage } from "../pages/login/login-component"

test("loginpage",async({page})=>{

const loginPage = new LoginPage(page)

//launching the app which we have available by using the link
        await loginPage.goto(munisivatestdata.url)
        await loginPage.clickLoginButton()
        await loginPage.login(munisivatestdata.Uname,munisivatestdata.Pcode) 
        await loginPage.verifyText()   
    //click on login button 

   

    //verify the presence of username 
   
    


})