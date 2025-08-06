const { test, expect } = require("@playwright/test");
import specPage from "../page_objects/specPage";

test.describe("purchase flow test", () => {
  test.beforeAll(async () => {
    console.log("starting test");
  });

  test.afterEach(async ({ page }) => {
    await page.goto('about:blank');});
  
  test("Complete purchasing flow of an item", async ({ page }) => {
    //precondition: user is not logged in
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    //user log in
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    //user select the second item, access to the PDP page
    const secondItem = page.locator(".inventory_item").nth(1);
    await secondItem.locator(".inventory_item_name").click();
    //verify article title, description, price
    await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
    //Verify the article is added
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("1");
    //view cart
    await page.locator('[data-test="shopping-cart-link"]').click(); 
    //checkout
    await page.locator('[data-test="checkout"]').click();
    //fill user data
    await page.locator('[id="first-name"]').fill("John");
    await page.locator('[id="last-name"]').fill("Doe");
    await page.locator('[id="postal-code"]').fill("12345");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
  });
});