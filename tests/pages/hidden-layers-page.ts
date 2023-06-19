import { Page, expect } from '@playwright/test';

export default class HiddenLayersPage {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    button = () => this.page.getByRole('button', {name: "Button"});

    public async clickGreenButton(){
        await this.button().click();
    }
}