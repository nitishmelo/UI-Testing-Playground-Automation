import { Page, expect } from '@playwright/test'

export default class VisibilityPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    //hideButton = () => this.page.getByRole('button', {name: "Hide"});
    // removedButton = () => this.page.getByRole('button', {name: "Removed"});
    // zeroWidthButton = () => this.page.getByRole('button', {name: "Zero Width"});
    // overlappedButton = () => this.page.getByRole('button', {name: "Overlapped"});
    // opacity0Button = () => this.page.getByRole('button', {name: "Opacity 0"});
    // visibilityHiddenButton = () => this.page.getByRole('button', {name: "Visibility Hidden"});
    // displayNoneButton = () => this.page.getByRole('button', {name: "Display None"});
    // offScreenButton = () => this.page.getByRole('button', {name: "Off Screen"});


    public async checkButtons(){
        let buttons = await this.page.getByRole('button').allTextContents();
        await this.page.getByRole('button', {name: buttons[0]}).click();
        
        for (let i = 1; i < buttons.length; i++){
            let res = await this.page.getByRole('button', {name: buttons[i]}).isVisible();
            let status = ""
            if (res){
                status = "Is Visible"
            }
            else{
                status = "Is Not Visible"
            }
            console.log(`${buttons[i]} Button: ${status}`)
        }
    }
}