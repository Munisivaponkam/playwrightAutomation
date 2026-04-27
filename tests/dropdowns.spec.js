const{test,expect}=require("@playwright/test")

test("dropdowns",async({page})=>{

    //launching the app
    await page.goto("https://testautomationpractice.blogspot.com/")

    //select the country from the dropdowns
   //1. await page.locator("#country").selectOption({label:"India"})      select by using label of the option

   //2.await page.locator("#country").selectOption("India")               select by using the text in options

  //3. await page.locator("#country").selectOption({value:"uk"})           by using value of the option

 //4. await page.locator("#country").selectOption("uk")                    by using value text 

 //5.await page.locator("#country").selectOption({index:4})                by using index number

 //6.await page.selectOption("#country","India")   this is the simple and shortest way to select the option in dropdown




 //assertions-------------dropdown

//1.  const options=await page.$$("#country option")
//  await expect(options).toHaveCount(10)

//2.const options=await page.$$("#country option")
//await expect(options.length).toBe(10)

// 3.const options=await page.locator("#country").textContent()
// await expect(options.includes("India")).toBeTruthy()

//4.const options=await page.$$('#country option')
// let status=false
// for(const option of options){
//     let value=await option.textContent()
//     if(value.includes("France")){
//         status=true
//         break
//     }
// }
// await expect(status).toBeTruthy()


//5. const options=await page.$$("#country option")
// for(const option of options){
//    let value = await option.textContent()
//    if(value.includes("India")){
//     await page.locator("#country").selectOption("India")
//     break
//    }

//}
// const options=await page.$$("#country option")
// let status=false
// for(const option of options){
//     let value=await option.textContent()
//     if(await value.includes("India")){
//         status=true
//         break
//     }
// }
// await expect(status).toBeTruthy()
   const options=await page.$$("#country option")
   for(const option of options){
    let value=await option.textContent()
    if(await value.includes("India")){
        await page.selectOption("#country","India")
        break
    }
   }

    await page.waitForTimeout(5000)
})