import { Page } from '@playwright/test';

export default class ClassAttributePage {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    button = () => this.page.locator('.btn-primary');

    public async testButton(){
        await this.button().click();
        this.page.on('dialog', dialog => console.log(dialog.message()));
        await this.page.getByText('OK').click();
    }
}