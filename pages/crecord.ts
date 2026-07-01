import { Page } from '@playwright/test';
export class record {
    private createdEmail?: string;
    private createdName?: string;
    private createdPhone?: string;
    
    constructor(private page: Page) {}

   

   async menu() {
        await this.page.locator('#vertical_header_name').first().click();
        await this.page.getByText('WWE', { exact: true }).nth(0).click();
   }

     async module(cc:string, num:string, char:string, efield: string, nfield:string, numfield:string, currfield:string) {
    
      await this.page.getByRole('button', {name: 'Add WWE '}).click();

      // text field 
      await this.page.locator('[name="wwe_text"]').fill(cc);

      // phone no field
      await this.page.locator('[name="wwe_phonenum"]').fill(num);

      // Textarea 
      await this.page.locator('[name="wwe_textarea"]').fill(char);

     // Email
      await this.page.locator('[name="wwe_emailid"]').fill(efield);
      this.createdEmail = efield;

      //name
      await this.page.locator('[name="wwe_namefeild"]').fill(nfield);

      //num 
      await this.page.locator('[name="wwe_number"]').fill(numfield);

      //currency
      await this.page.locator('[name="wwe_currency"]').fill(currfield);
    

      //save button
      await this.page.locator('button.btn.btn-bg-gradient-x-purple-red.text-white.ModuleSubmit.font-weight-normal').first().click();

      //go to list view
       await this.page.locator('a.header_dup_all_module_show_btn').click();

     }


      async editEmail(newEmail: string, currentEmail = this.createdEmail) {
        if (!currentEmail) {
            throw new Error('Current email is required before editing the record email.');
        }

        const escapedEmail = currentEmail.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        const row = this.page.locator(`[id^="row-"]:has([title="${escapedEmail}"])`).first();
        const emailCell = row.locator('td').filter({
            has: this.page.locator(`[title="${escapedEmail}"]`),
        }).first();

        await row.waitFor({ state: 'visible' });
        await emailCell.hover();

        await emailCell
            .locator('.single-edit, .fa-pencil, .fa-pen, [class*="pencil"]')
            .first()
            .click();

        const emailInput = emailCell.locator('input[name="wwe_emailid"], input[type="email"], input').first();
        await emailInput.waitFor({ state: 'visible' });
        await emailInput.fill(newEmail);
        //btn tick-btn
        await emailCell.locator('[class="btn tick-btn"]').first().click();
        this.createdEmail = newEmail;
      }

     /* async editname(newName: string, currentName = this.createdName) {
        if (!currentName) {
            throw new Error('Current name is required before editing the record name.');
        }

        const escapedName = currentName.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        const row = this.page.locator(`[id^="row-"]:has([title="${escapedName}"])`).first();
        const nameCell = row.locator('td').filter({
            has: this.page.locator(`[title="${escapedName}"]`),
        }).first();

        await row.waitFor({ state: 'visible' });  
        await nameCell.hover();  
        
        await nameCell //single-edit
            .locator('.single-edit, .fa-pencil, .fa-pen, [class*="pencil"]')
            .first()
            .click();

        const nameInput = nameCell.locator('input[name="wwe_namefeild"], input[type="text"], input').first();
        await nameInput.waitFor({ state: 'visible' });
        await nameInput.fill(newName);

        //btn tick-btn
        await nameCell.locator('[class="btn tick-btn"]').first().click();
        this.createdName = newName;
      }*/

      async editPhone(newPhone: string, currentPhone = this.createdPhone) {
        if (!currentPhone) {
            throw new Error('Current phone number is required before editing the record phone number.');
        } 

        const escapedPhone = currentPhone.replace(/\\/g, '\\\\').replace(/"/g, '\\"');  
        const row = this.page.locator(`[id^="row-"]:has([title="${escapedPhone}"])`).first();
        const phoneCell = row.locator('td').filter({
            has: this.page.locator(`[title="${escapedPhone}"]`),
        }).first();


        await row.waitFor({ state: 'visible' });
        await phoneCell.hover();  
        
        await phoneCell //single-edit 
            .locator('.single-edit, .fa-pencil, .fa-pen, [class*="pencil"]')
            .first()
            .click(); 

        const phoneInput = phoneCell.locator('input[name="wwe_phonenum"], input[type="tel"], input').first();
        await phoneInput.waitFor({ state: 'visible' });
        await phoneInput.fill(newPhone);  
         

        //btn tick-btn
        await phoneCell.locator('[class="btn tick-btn"]').first().click();
        this.createdPhone = newPhone;   

      }





        

}
    




