import { Locator, Page } from '@playwright/test';
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
      this.createdPhone = num;

      // Textarea 
      await this.page.locator('[name="wwe_textarea"]').fill(char);

     // Email
      await this.page.locator('[name="wwe_emailid"]').fill(efield);
      this.createdEmail = efield;

      //name
      await this.page.locator('[name="wwe_namefeild"]').fill(nfield);
      this.createdName = nfield;

      //num 
      await this.page.locator('[name="wwe_number"]').fill(numfield);

      //currency
      await this.page.locator('[name="wwe_currency"]').fill(currfield);
    

      //save button
      await this.page.locator('button.btn.btn-bg-gradient-x-purple-red.text-white.ModuleSubmit.font-weight-normal').first().click();

      //go to list view
       await this.page.locator('a.header_dup_all_module_show_btn').click();

     }


      async editEmail(newEmail: string) {
        const emailCell = await this.findTitleCell(this.createdEmail, 'email');
        await this.singleEditCell(emailCell, 'input[name="wwe_emailid"], input[type="email"], input', newEmail);
        await this.page
            .locator(`[id^="row-"]:has([title="${this.escapeCssString(newEmail)}"])`)
            .first()
            .waitFor({ state: 'visible' });
        this.createdEmail = newEmail;
      }

      async editName(newName: string, currentName = this.createdName) {
        const nameCell = await this.findTextCell(currentName, 'name');
        await this.singleEditCell(nameCell, 'input[name="wwe_namefeild"], input[type="text"], input', newName);
        this.createdName = newName;
      }

      async editname(newName: string, currentName = this.createdName) {
        await this.editName(newName, currentName);
      }

      async editPhone(newPhone: string, currentPhone = this.createdPhone) {
        const phoneCell = await this.findTextCell(currentPhone, 'phone number');
        await this.singleEditCell(phoneCell, 'input[name="wwe_phonenum"], input[type="tel"], input', newPhone);
        this.createdPhone = newPhone;
      }

      private getRecordRow() {
        if (!this.createdEmail) {
            throw new Error('Current email is required to find the created record row.');
        }

        const escapedEmail = this.escapeCssString(this.createdEmail);
        return this.page.locator(`[id^="row-"]:has([title="${escapedEmail}"])`).first();
      }

      private async findTitleCell(currentValue: string | undefined, fieldName: string) {
        if (!currentValue) {
            throw new Error(`Current ${fieldName} is required before editing the record ${fieldName}.`);
        }

        const row = this.getRecordRow();
        const escapedValue = this.escapeCssString(currentValue);
        const cell = row.locator('td').filter({
            has: this.page.locator(`[title="${escapedValue}"]`),
        }).first();

        await row.waitFor({ state: 'visible' });
        await cell.waitFor({ state: 'visible' });
        return cell;
      }

      private async findTextCell(currentValue: string | undefined, fieldName: string) {
        if (!currentValue) {
            throw new Error(`Current ${fieldName} is required before editing the record ${fieldName}.`);
        }

        const row = this.getRecordRow();
        const escapedValue = this.escapeCssString(currentValue);
        const cellText = new RegExp(`^\\s*${this.escapeRegex(currentValue)}\\s*$`);
        const visiblePrefix = currentValue.slice(0, 7);
        const cell = row.locator('td').filter({
            has: this.page.locator(`[title="${escapedValue}"]`),
        }).or(row.locator('td').filter({
            hasText: cellText,
        })).or(row.locator('td').filter({
            hasText: currentValue,
        })).or(row.locator('td').filter({
            hasText: visiblePrefix,
        })).first();

        await row.waitFor({ state: 'visible' });
        await cell.waitFor({ state: 'visible' });
        return cell;
      }

      private async singleEditCell(cell: Locator, inputSelector: string, newValue: string) {
        const visibleInputSelector = inputSelector
            .split(',')
            .map(selector => `${selector.trim()}:visible`)
            .join(', ');

        await cell.scrollIntoViewIfNeeded();
        await cell.hover({ force: true });
        await cell
            .locator('.single-edit:visible, .fa-pencil:visible, .fa-pen:visible, [class*="pencil"]:visible')
            .first()
            .click();

        const input = cell.locator(visibleInputSelector).first();
        await input.waitFor({ state: 'visible' });
        await input.fill(newValue);
        await cell.locator('.tick-btn:visible, button.btn-success:visible, .btn-success:visible').first().click();
        await input.waitFor({ state: 'hidden' });
      }

      private escapeCssString(value: string) {
        return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      }

      private escapeRegex(value: string) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }

        

}
    




