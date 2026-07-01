import { test } from '@playwright/test';
import { LoginPage } from '../pages/crmlogin';
import { record } from '../pages/crecord';


test('Login test', async ({ page }) => {
    test.setTimeout(300000)
    const loginPage = new LoginPage(page);
    const crecord = new record(page);
    const emailSuffix = Date.now();
    const initialEmail = `vaseekaran${emailSuffix}@rsoft.in`;
    const updatedEmail = `newemail${emailSuffix}@example.com`;

    await loginPage.crmlogin('VASEEKARAN', 'rsoft', 'RSoft!@345');
    
    await crecord.menu();
     await crecord.module('rsssoftttt', '9597535460', 'Rsofyt real estate R2', initialEmail, 'loki', '100', '400000');

     await crecord.editEmail(updatedEmail, initialEmail);
   //  await crecord.editname('loki', 'loki2');
     await crecord.editPhone('9876543210', '9597535460');




});
