import { Page } from '@playwright/test';

export default class ClassAttributePage {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    button = () => this.page.locator('.btn-primary');

    public async testButton(){
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
          await this.page.pause();
          await this.button().click();
    }
}