import { Page, expect } from '@playwright/test'

export default class ShadowDOMPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    cogButton = () => this.page.getByRole('button', { name: '' })
    cloneButton = () => this.page.getByRole('button', { name: '' })
    textField = () => this.page.locator('#editField');

    public async CompareInputAndClipBoard(){    
        await this.cogButton().click();
        await this.cloneButton().click();     
    }
}