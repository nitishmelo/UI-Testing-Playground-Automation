import { Page, expect } from '@playwright/test'

export default class VerifyTextPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public async findElementWithText(){
        const matches = await this.page.getByText("Welcome").allTextContents();
        expect(matches).toHaveLength(4);
    }
}