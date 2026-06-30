import { Page}  from '@playwright/test';
export class workflow{

    constructor(private page: Page) {}

  async pro(){
        await this.page.locator("a[class='dropdown-toggle nav-link dropdown-user-link'] img").click();
        // await this.page.getByRole('link', { name: 'CRM Setting',exact:true }).click();
        await this.page.locator('.checkValidation').first().click()
        // await this.page.getByRole('link', {name: 'Other Settings'}).click();
        await this.page.getByText('Other Settings', { exact: true }).first().click();
        
        await this.page.getByText('Workflow',{ exact: true}).first().click();
    }
       async cworkflow(module: string, title:string, sub:string){
    
        const randomString = Math.random().toString(36).substring(2, 10);

        await this.page.getByRole('button', {name: 'Creating  Workflow'}).click();
        //await this.page.locator('select2-workflowselectmod-container').first().click();
        await this.page.locator('#select2-workflowselectmod-container:visible').click();
        // await this.page.locator('select2-search select2-search--dropdown').fill(module)
        
        await this.page.locator('input.select2-search__field:visible').fill(module);
        await this.page.getByRole('treeitem').click();
        //await this.page.locator('.workflowdes .form-control').click();


        const name = this.page.locator('input[name="summary"]');
        await name. fill(randomString);

        await this.page.getByText('Next',{exact: true}).click();
         await this.page.getByText('Next',{exact: true}).click();

         // submit
        // await this.page.getByText( 'Submit', {exact: true}).click();

         await this.page.getByRole('button', { name: '+ Add To Do' }).click();

         // click mail
         await this.page.locator('div.dropdown-menu.show').locator('a').nth(1).click();

        
        await this.page.locator('input[name="emailsummary"]').fill(title);


         //outgoing email
        await this.page.locator('[role="combobox"]').nth(5).click();
        await this.page.getByRole('treeitem', { name: 'rsoftindia1@gmail.com',exact : true}).first().click();

           
        //To
        await this.page.locator('[role="textbox"]').nth(8).click();
        await this.page.getByRole('treeitem', { name: ' (WWE) WWE: (Email Id)',exact : true}).first().click();

         //subject
         await this.page.locator('input[name="subject"]').fill(sub);
         //Add field
         await this.page.locator('[role="textbox"]').nth(14).click(); //(WWE)  URL
         await this.page.getByRole('treeitem', { name: ' (WWE)  URL',exact : true}).first().click();
       
        await this.page.locator('[name="Workflowsubmit"]').click();

        // Toggle button
         await this.page.locator('[class="switchery switchery-default"]').first().click();
            await this.page.locator('[class="btn btn-primary mr-1"]').click();

          const lastRow = this.page.locator('[class*="Removerow_"]').last();
            const toggle = lastRow.locator('span.switchery.switchery-default');
            await toggle.scrollIntoViewIfNeeded();
            await toggle.click();

            //Record create

    }
    async menu() {
        await this.page.locator('#vertical_header_name').first().click();
        await this.page.getByText('WWE', { exact: true }).nth(0).click();
        //  await this.page.locator(':text("WWE")').click();
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

      //name
      await this.page.locator('[name="wwe_namefeild"]').fill(nfield);

      //num 
      await this.page.locator('[name="wwe_number"]').fill(numfield);

      //currency
      await this.page.locator('[name="wwe_currency"]').fill(currfield);


      //state
      await this.page.locator('#select2-selfield_4359-container').click();
      await this.page.getByRole('button', {name : 'denmo'}).first().click();

      //city
      await this.page.locator('#select2-selfield_4360-container').click();
      await this.page.locator('#select2-selfield_4360-result-o1lw-Karur').click();

      //country 
      await this.page.locator('#select2-selfield_4502-container').click();
      await this.page.locator('#select2-selfield_4502-result-c4vb-vinland').click();

      //picklist
      await this.page.locator('#select2-selfield_4822-container').click();
      await this.page.locator('#select2-selfield_4822-result-ulw3-abc').click();

      //multicombox
      await this.page.locator('select2-selection select2-selection--multiple').click();
      await this.page.locator('#select2-selfield_4365 -result-1cge-vasee').click();
      await this.page.locator('#select2-selfield_4365 -result-m306-love').click();
      await this.page.locator('#select2-selfield_4365 -result-fnvn-kamali').click();






      //save button
      await this.page.locator('button.btn.btn-bg-gradient-x-purple-red.text-white.ModuleSubmit.font-weight-normal').first().click();

      //update
      const update = await this.page.locator('li.appendli').first().allInnerTexts();
      console.log(update);

    }


}