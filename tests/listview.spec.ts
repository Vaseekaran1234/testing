import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/crmlogin';
import { listView } from '../pages/menu';

test('Login test', async ({ page }) => {
    test.setTimeout(300000)
    const loginPage = new LoginPage(page);
    const listViewPage = new listView(page);

    await loginPage.crmlogin('VASEEKARAN', 'rsoft', 'RSoft!@345');
    await listViewPage.menu();
    await listViewPage.module();
    await listViewPage.record();
    await listViewPage.edit();
    await listViewPage.delete();

    
    

});