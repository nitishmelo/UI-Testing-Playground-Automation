import { Page, expect } from '@playwright/test'

export default class NonBreakingSpacePage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public async findButton(){
        await this.page.locator("xpath=//button[text()='My\u00A0Button']").click();         
    }
}