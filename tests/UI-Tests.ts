import { test } from './fixtures/basePage';
import { expect } from '@playwright/test';

test('dynamicIDTest', async ({ homePage, dynamicIDPage }) => {
  await homePage.goto();
  await homePage.dynamicIDButton().click();
  await dynamicIDPage.testButton();
});

test('classAttributeTest', async ({ homePage, classAttributePage }) => {
  await homePage.goto();
  await homePage.classAttributeButton().click();
  await classAttributePage.testButton();
});

test('HiddenLayersTest', async ({ homePage, hiddenLayersPage }) => {
  await homePage.goto();
  await homePage.hiddenLayersButton().click();
  await hiddenLayersPage.clickGreenButton();
  expect(hiddenLayersPage.clickGreenButton()).rejects.toThrow();
});

test('loadDelayTest', async ({ homePage, loadDelayPage }) => {
  await homePage.goto();
  await homePage.loadDelayButton().click();
  await loadDelayPage.clickDelayButton();
});

test('ajaxPageTest', async ({ homePage, ajaxButtonPage }) => {
  await homePage.goto();
  await homePage.ajaxDataButton().click();
  await ajaxButtonPage.checkAjaxText();
});
