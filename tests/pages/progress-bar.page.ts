import { Page, expect } from '@playwright/test'

export default class ProgressBarPage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    progressBar = () => this.page.getByRole('progressbar');
    startButton = () => this.page.getByRole('button', {name: "Start"});
    stopButton = () => this.page.getByRole('button', {name: "Stop"});

    public async StopAt75(){
        await this.startButton().click();
        while (await this.progressBar().textContent() !== "75%"){
        }
        await this.stopButton().click();
        const result = await this.page.getByText("Result:").textContent();
        console.log(result);
    }
}