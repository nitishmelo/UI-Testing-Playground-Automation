import { Page, expect } from '@playwright/test';

export default class LoadDelayPage {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    delayButton = () => this.page.getByRole('button', {name: 'Button Appearing After Delay'});

    public async clickDelayButton(){
        await this.delayButton().click();
    }
}