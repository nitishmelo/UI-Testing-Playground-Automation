import { Page, expect } from '@playwright/test'

export default class ScrollBarsPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    scrollBarsButton = () => this.page.getByRole("button", {name: "Hiding Button"});

    public async clickScrollBarsButton(){
        await this.scrollBarsButton().click();        
    }
}