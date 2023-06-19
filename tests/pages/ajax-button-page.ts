import { Page, expect } from '@playwright/test'

export default class AjaxButtonPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    ajaxButton = () => this.page.getByRole('button', {name: 'Button Triggering AJAX Request'});

    public async checkAjaxText(){
        await this.ajaxButton().click();
        await this.page.getByText('Data loaded with AJAX get request.').click();           
    }
}