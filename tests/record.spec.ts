import { test } from '@playwright/test';
import { LoginPage } from '../pages/crmlogin';
import { record } from '../pages/crecord';


test('Login test', async ({ page }) => {
    test.setTimeout(300000)
    const loginPage = new LoginPage(page);
    const crecord = new record(page);
    const recordSuffix = Date.now();
    const phoneSuffix = String(recordSuffix).slice(-5);
    const initialEmail = `vaseekaran${recordSuffix}@rsoft.in`;
    const updatedEmail = `newemail${recordSuffix}@example.com`;
    const initialName = 'loki';
    const updatedName = 'lokiedit';
    const initialPhone = `95975${phoneSuffix}`;
    const updatedPhone = `98765${phoneSuffix}`;

     await loginPage.crmlogin('VASEEKARAN', 'rsoft', 'RSoft!@345');
    
     await crecord.menu();
     await crecord.module('rsssoftttt', initialPhone, 'Rsofyt real estate R2', initialEmail, initialName, '100', '400000');

     await crecord.editEmail(updatedEmail);
     await crecord.editName(updatedName);
     await crecord.editPhone(updatedPhone);




});
