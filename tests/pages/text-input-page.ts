import { Page, expect } from '@playwright/test'

export default class TextInputPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    initialButton = () => this.page.getByRole('button', {name: "Button That Should Change it's Name Based on Input Value"})
    textField = () => this.page.getByPlaceholder('MyButton');

    public async checkForButtonName(newName: string){
        this.textField().fill(newName);
        await this.initialButton().click();
        const slowExpect = expect.configure({timeout: 30000});
        await slowExpect(this.page.getByRole('button', {name: newName})).toBeVisible();         
    }
}