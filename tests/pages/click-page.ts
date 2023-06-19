import { Page, expect } from '@playwright/test'

export default class ClickPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    blueClickButton = () => this.page.locator('.btn-primary');

    public async checkClickButton(){
        await this.blueClickButton().click();
        await this.page.locator('.btn-success').click();           
    }
}