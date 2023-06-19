import { Page, expect } from '@playwright/test'

export default class DynamicTablePage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public async retrieveChromeCPUData(){
        const table = await this.page.getByRole('table', {name: "Tasks"});
        const headers = await table.getByRole('row').filter({ hasText: 'Chrome' })
        const cell = await headers.getByRole('cell').filter({ hasText: "%"});
        let cpuPercentage = await cell.textContent();
        let cpuString = "Chrome CPU: " + cpuPercentage;
        const label = await this.page.locator(".bg-warning");
        await expect(label).toHaveText(cpuString);

    }
}