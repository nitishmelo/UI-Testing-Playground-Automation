import { Page } from '@playwright/test';

export default class DynamicIDPage {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    button = () => this.page.getByRole('button', {name: 'Button with Dynamic ID'});

    public async testButton(){
        await this.button().click();
    }
}