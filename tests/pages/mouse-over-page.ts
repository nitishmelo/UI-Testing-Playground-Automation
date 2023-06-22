import { Page, expect } from '@playwright/test'

export default class MouseOverPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    clickMeButton = () => this.page.getByText('Click me');
    counter = () => this.page.locator('#clickCount');

    public async checkClickCount(){
        let count = Number(await this.counter().textContent());
        expect(count).toBe(0);
        for (let c = 2; c < 60; c+=2){
            await this.clickMeButton().dblclick();
            count = Number(await this.counter().textContent());
            expect(count).toBe(c);
        }       
    }
}