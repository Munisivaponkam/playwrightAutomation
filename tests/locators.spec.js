const {test,expect} =require("@playwright/test")

test.skip("locators",async({page})=>{

    //launching the app
    await page.goto('https://www.demoblaze.com/index.html#')
    
    //whwnever we need to select multiple locators that time we have to use this array function

    const links=await page.$$("//a")
    for(const link of links){
        const linktext=await link.textContent()
        console.log(linktext)
    }
})
 test('links',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html#")
    await page.waitForSelector('#tbodyid div h4 a')
    const links=await page.$$("#tbodyid div h4 a")
    for(const link of links){
        const linktext=await link.textContent()
        console.log(linktext)
        
    }
 })