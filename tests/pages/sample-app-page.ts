import { Page, expect } from '@playwright/test'

export default class SampleAppPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    userNameField = () => this.page.getByPlaceholder("User Name");
    passwordField = () => this.page.getByPlaceholder("********");
    logInButton = () => this.page.getByRole('button', {name: "Log In"});

    public async logInCheck(userName: string){
        const status = await this.page.locator('#loginstatus'); 

        await this.userNameField().fill(userName);
        await this.passwordField().fill("wrongpassword");
        await this.logInButton().click(); 
        await expect(status).toHaveText("Invalid username/password");

        await this.userNameField().fill(userName);
        await this.passwordField().fill("pwd");
        await this.logInButton().click(); 
        await expect(status).toHaveText(`Welcome, ${userName}!`);

    }
}