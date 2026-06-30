import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/crmlogin';
import { workflow } from '../pages/workflow';


test('Login test', async ({ page }) => {
    test.setTimeout(300000)
    const loginPage = new LoginPage(page);
    const Workflow = new workflow(page);

    await loginPage.crmlogin('VASEEKARAN', 'rsoft', 'RSoft!@345');
    
   //await Workflow.pro();
    
   //await Workflow.cworkflow('WWE', 'email', 'subject');
    
    await Workflow.menu();
    await Workflow.module('rsssoftttt', '9597535460', 'Rsofyt real estate R2','vaseekaran@rsoft.in', 'loki', '100', '400000');




});
