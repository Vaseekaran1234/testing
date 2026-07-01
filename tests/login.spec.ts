import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/crmlogin';
import { listView } from '../pages/menu';
import { workflow } from '../pages/workflow';
import { record } from '../pages/crecord';

test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const listViewPage = new listView(page);
    const Workflow = new workflow(page);
    const crecord = new record(page);

    

});
