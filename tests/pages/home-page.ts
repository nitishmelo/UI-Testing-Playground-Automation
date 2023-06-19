import { Page } from '@playwright/test';

export default class HomePage {
    page: Page;
    constructor(page: Page){
        this.page = page;
    }
    public async goto(){
        await this.page.goto('http://www.uitestingplayground.com/');
    }

    dynamicIDButton = () => this.page.getByRole('link', {name: 'Dynamic ID'});
    classAttributeButton = () => this.page.getByRole('link', {name: 'Class Attribute'});
    hiddenLayersButton = () => this.page.getByRole('link', {name: 'Hidden Layers'});
    loadDelayButton = () => this.page.getByRole('link', {name: 'Load Delay'});
    ajaxDataButton = () => this.page.getByRole('link', {name: 'AJAX Data'});
    clientSideDelayButton = () => this.page.getByRole('link', {name: 'Client Side Delay'});
    clickButton = () => this.page.getByRole('link', {name: 'Click'});
    textInputButton = () => this.page.getByRole('link', {name: 'Text Input'});
    scrollBarsButton = () => this.page.getByRole('link', {name: 'Scrollbars'});
    dynamicTableButton = () => this.page.getByRole('link', {name: 'Dynamic Table'});
    verifyTextButton = () => this.page.getByRole('link', {name: 'Verify Text'});
    progressBarButton = () => this.page.getByRole('link', {name: 'Progress Bar'});
    visibilityButton = () => this.page.getByRole('link', {name: 'Visibility'});
    sampleAppButton = () => this.page.getByRole('link', {name: 'Sample App'});
    mouseOverButton = () => this.page.getByRole('link', {name: 'Mouse Over'});
    nonBreakingSpaceButton = () => this.page.getByRole('link', {name: 'Non-Breaking Space'});
    overlappedElementButton = () => this.page.getByRole('link', {name: 'Overlapped Element'});
    shadowDomButton = () => this.page.getByRole('link', {name: 'Shadow DOM'});
}