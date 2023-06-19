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
  await expect(hiddenLayersPage.clickGreenButton()).rejects.toThrow();
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

test('clientSideDelayTest', async ({ homePage, clientSideDelayPage }) => {
  await homePage.goto();
  await homePage.clientSideDelayButton().click();
  await clientSideDelayPage.checkClientSideText();
});

test('clickTest', async ({ homePage, clickPage }) => {
  await homePage.goto();
  await homePage.clickButton().click();
  await clickPage.checkClickButton();
});

test.only('textInputTest', async ({ homePage, textInputPage }) => {
  await homePage.goto();
  await homePage.textInputButton().click();
  let newName = "CHANGED BUTTON NAME";
  await textInputPage.checkForButtonName(newName);
});

test('scrollBarsTest', async ({ homePage, scrollBarsPage }) => {
  await homePage.goto();
  await homePage.scrollBarsButton().click();
  await scrollBarsPage.clickScrollBarsButton();
});

test('dynamicTableTest', async ({ homePage, dynamicTablePage }) => {
  await homePage.goto();
  await homePage.dynamicTableButton().click();
  await dynamicTablePage.retrieveChromeCPUData();
});