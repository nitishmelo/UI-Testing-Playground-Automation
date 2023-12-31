import { test } from './fixtures/basePage';
import { expect } from '@playwright/test';

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
})
test('dynamicIDTest', async ({ homePage, dynamicIDPage }) => {
  await homePage.dynamicIDButton().click();
  await dynamicIDPage.testButton();
});

test('classAttributeTest', async ({ homePage, classAttributePage }) => {
  await homePage.classAttributeButton().click();
  await classAttributePage.testButton();
});

test('HiddenLayersTest', async ({ homePage, hiddenLayersPage }) => {
  await homePage.hiddenLayersButton().click();
  await hiddenLayersPage.clickGreenButton();
  await expect(hiddenLayersPage.clickGreenButton()).rejects.toThrow();
});

test('loadDelayTest', async ({ homePage, loadDelayPage }) => {
  await homePage.loadDelayButton().click();
  await loadDelayPage.clickDelayButton();
});

test('ajaxPageTest', async ({ homePage, ajaxButtonPage }) => {
  await homePage.ajaxDataButton().click();
  await ajaxButtonPage.checkAjaxText();
});

test('clientSideDelayTest', async ({ homePage, clientSideDelayPage }) => {
  await homePage.clientSideDelayButton().click();
  await clientSideDelayPage.checkClientSideText();
});

test('clickTest', async ({ homePage, clickPage }) => {
  await homePage.clickButton().click();
  await clickPage.checkClickButton();
});

test('textInputTest', async ({ homePage, textInputPage }) => {
  test.slow();
  await homePage.textInputButton().click();
  let newName = "CHANGED BUTTON NAME";
  await textInputPage.checkForButtonName(newName);
});

test('scrollBarsTest', async ({ homePage, scrollBarsPage }) => {
  await homePage.scrollBarsButton().click();
  await scrollBarsPage.clickScrollBarsButton();
});

test('dynamicTableTest', async ({ homePage, dynamicTablePage }) => {
  await homePage.dynamicTableButton().click();
  await dynamicTablePage.retrieveChromeCPUData();
});

test('verifyTextTest', async ({ homePage, verifyTextPage }) => {
  await homePage.verifyTextButton().click();
  await verifyTextPage.findElementWithText();
});

test('progressBarTest', async ({ homePage, progressBarPage }) => {
  await homePage.progressBarButton().click();
  await progressBarPage.StopAt75();
});

test('visibilityTest', async ({ homePage, visibilityPage }) => {
  await homePage.visibilityButton().click();
  await visibilityPage.checkButtons();
});

test('sampleAppTest', async ({ homePage, sampleAppPage }) => {
  await homePage.sampleAppButton().click();
  await sampleAppPage.logInCheck("Lure");
});

test('mouseOverTest', async ({ homePage, mouseOverPage }) => {
  await homePage.mouseOverButton().click();
  await mouseOverPage.checkClickCount();
});

test('nonBreakingSpaceTest', async ({ homePage, nonBreakingSpacePage }) => {
  await homePage.nonBreakingSpaceButton().click();
  await nonBreakingSpacePage.findButton();
});

test('overlappedTest', async ({ homePage, overlappedPage }) => {
  await homePage.overlappedElementButton().click();
  await overlappedPage.scrollAndEnterText();
});

test.skip('shadowDOMTest', async ({ homePage, shadowDOMPage }) => {
  await homePage.shadowDomButton().click();
  await shadowDOMPage.CompareInputAndClipBoard();
});