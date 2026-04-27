const{test,expect}=require("@playwright/test")

test("assertions",async({page})=>{

    //1.open apen url

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //2.toHaveURL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //3.toHaveTitle
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    //4.toBeVisible
    const logo=await page.locator(".header-logo img")
   await expect(logo).toBeVisible()

    //5.toBeEnabled//toBeDisabled
    const searchbox=await page.locator("[placeholder='Search store']")
    await expect(searchbox).toBeEnabled()

    //6.toBeChecked
   const radiobox= await page.locator("#gender-female")
   await radiobox.check()
   await expect(radiobox).toBeChecked()
    //7.toHaveAttribute
    const attribute=await page.locator("//a[text()='Computers']")
    await expect(attribute).toHaveAttribute("role","button")

    //8.toHaveText
    const text=await page.locator(".page-title")
    await expect(text).toHaveText('Register')

    //9.tocontainText
    const texts=await page.locator(".page-title")
    await expect(texts).toContainText("Reg")

    //10.toHaveValue
     const value=await page.locator("#FirstName")
     await value.type("Muni")
     await expect(value).toHaveValue("Muni")

    //11.toHaveCount
   const count= await page.locator("//a")
   await expect(count).toHaveCount(46)


})