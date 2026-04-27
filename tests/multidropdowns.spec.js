const {test,expect}=require("@playwright/test")
import {LoginPage} from "../pages/login/login-component"
import logintestdata from "../testdata/logintestdata.json"
test("multidropdowns",async function({page}){
    const loginPage = new LoginPage(page)
    //open application by using URL
    await loginPage.goto(logintestdata.multiDropDownURL)
   
    //select from multi options in the dropdowns
    // await page.selectOption("#animals",["Cat","Dog","Fox"])

    //asertions
  //1.  const animals=await page.locator("#animals option")
   // await expect(animals).toHaveCount(10)

//   2. const animals=await page.$$("#animals option")
//    await expect(animals.length).toBe(10)

//3.const animals=await page.locator("#animals").textContent()
//await expect(animals.includes("Fox")).toBeTruthy()


// 4.const animals=await page.$$("#animals option")
// let status=false
// for(const muni of animals){
//     let siva=await muni.textContent()
//     if(await siva.includes("Cat","Fox","Dog")){
//         status=true
//         break
//     }
// }
// await expect(status).toBeTruthy()

const animals=await page.$$("#animals")
 for(const muni of animals){
    let siva=await muni.textContent(   )
    
    if(await siva.includes("Cat","Fox","Dog")){
        await page.selectOption("#animals",["Cat","Fox","Dog"])
        
        break
    }
    

 }


    await page.waitForTimeout(5000)

})

