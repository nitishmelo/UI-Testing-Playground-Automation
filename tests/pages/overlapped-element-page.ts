import { Page, expect } from '@playwright/test'

export default class OverLappedPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public async scrollAndEnterText(){
        await this.page.getByPlaceholder("Subject").scrollIntoViewIfNeeded();
        await this.page.getByPlaceholder("Name").fill("Stuff");

    }
}