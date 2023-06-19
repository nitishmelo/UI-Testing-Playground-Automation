import { Page, expect } from '@playwright/test'

export default class ClientSideDelayPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    clientSideLogicButton = () => this.page.getByRole('button', {name: 'Button Triggering Client Side Logic'});

    public async checkClientSideText(){
        await this.clientSideLogicButton().click();
        const slowExpect = expect.configure({timeout: 30000});
        await slowExpect(this.page.getByText('Data calculated on the client side.')).toBeVisible();           
    }
}