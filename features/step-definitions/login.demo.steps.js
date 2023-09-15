import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await browser.url("https://www.saucedemo.com/");
});

When(/^User clicks the "([^"]*)" button$/, async (buttonName) => {
    await LoginPage.clickLoginButton();
});

Then(/^User should see "([^"]*)" error message$/, async (expectedErrorMessage) => {
  const actualErrorMessage = await LoginPage.getErrorMessageText();
  expect(actualErrorMessage).toBe(expectedErrorMessage);
});