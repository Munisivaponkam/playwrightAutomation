import {test,expect} from ("@playwright/tests")
import { loginpage } from "../pages/login/loginpage"

import logintestdata from "../testdata/logintestdata.json"


test("loginpage",async function(page){

    const login=new loginpage(page)
    await login.goto(logintestdata.url)
})