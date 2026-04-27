const {test,expect}=require("@playwright/test")

test("checkboxes",async({page})=>{
    //lauch the app by using URL
    await page.goto("https://the-internet.herokuapp.com/checkboxes")

    //checkboxes
    await page.locator("//input[@type='checkbox'] [1]").check()
    await expect(await page.locator("//input[@type='checkbox'] [1]").isChecked()).toBeTruthy()
    

    //multiple checkboxes
    const checkboxes=["//input[@type='checkbox'] [1]","//input[@type='checkbox'] [2]"]
    for(const box of checkboxes){
        await page.locator(box).check()
    }
    await page.waitForTimeout(5000)

    //uncheck the checkboxes
    for(const box of checkboxes){
        if(await page.locator(box).isChecked()){
            await page.locator(box).uncheck()
        }
    }
    await page.waitForTimeout(5000)
                       
    
})