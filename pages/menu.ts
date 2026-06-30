import { Page } from '@playwright/test';
export class listView {
    
    constructor(private page: Page) {}

    private firstRow() {
        return this.page.locator('[id^="row-"]').first();
    }

    private async openFirstRowMenu() {
        const row = this.firstRow();
        await row.hover();
        await row.locator('.fa-solid.fa-ellipsis-vertical:visible').click();
        return row;
    }

    async menu() {
        await this.page.locator('#vertical_header_name').first().click();
    }

    async module() {
        await this.page.getByText('Rose').click();

    }

   async record() {

    const row = await this.openFirstRowMenu();

    // await this.page.locator('.fa-ellipsis-vertical').first().click();

    await row.getByText('Details', { exact: true }).click();
    await this.page.locator('a.header_dup_all_module_show_btn').click();

    

   }
    async edit(){
    const row = await this.openFirstRowMenu();
    await row.getByRole('link', { name: 'Edit' }).click();
   
    await this.page.getByRole('button', { name: 'Save' }).first().click();
    await this.page.locator('a.header_dup_all_module_show_btn').click();
    }

    async delete(){
    const row = await this.openFirstRowMenu();
    // await this.page.getByRole('link', {name:'Delete'}).click();
    await row.getByText('Delete', { exact: true }).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
    //await this.page.locator('#dropdown-item').first().click();
    //await this.page.getByText('Delete').click();
    }



}



    

    


