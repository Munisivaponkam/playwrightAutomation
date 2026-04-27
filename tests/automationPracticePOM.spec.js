import{test,expect} from "@playwright/test"
import { RegisterPage} from "../pages/AutomationPractice/registerpage"
import autotestdata from "../testdata/AutomationPractice/Registertestdata.json"
test("registerpage",async function({page}){

    const registerpage = new RegisterPage(page)
    await registerpage.registerDetais(page)
    await page.pause()
})
