import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await browser.url("https://www.saucedemo.com/");
});

When(/^User clicks the Login button$/, async () => {
    await loginPage.clickLoginButton();
});

Then(/^User should see "([^"]*)" error message$/, async (expectedErrorMessage) => {
  const actualErrorMessage = await loginPage.getErrorMessageText();
  expect(actualErrorMessage).toBe(expectedErrorMessage);
});