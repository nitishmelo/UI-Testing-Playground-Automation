import {test as base} from '@playwright/test'
import HomePage from '../pages/home-page';
import DynamicIDPage from '../pages/dynamic-id-page';
import ClassAttributePage from '../pages/class-attribute-page';
import HiddenLayersPage from '../pages/hidden-layers-page';
import LoadDelayPage from '../pages/load-delay-page';
import AjaxButtonPage from '../pages/ajax-button-page';

export const test = base.extend<{homePage: HomePage; dynamicIDPage: DynamicIDPage; classAttributePage: ClassAttributePage;
hiddenLayersPage: HiddenLayersPage; loadDelayPage: LoadDelayPage; ajaxButtonPage: AjaxButtonPage }>
({
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },
    dynamicIDPage: async({page}, use) => {
        await use(new DynamicIDPage(page));
    },
    classAttributePage: async({page}, use) => {
        await use(new ClassAttributePage(page));
    },
    hiddenLayersPage: async({page}, use) => {
        await use(new HiddenLayersPage(page));
    },
    loadDelayPage: async({page}, use) => {
        await use(new LoadDelayPage(page));
    },
    ajaxButtonPage: async({page}, use) => {
        await use(new AjaxButtonPage(page));
    },
})