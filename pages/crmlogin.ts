import{Page } from 'playwright'; 
export class LoginPage {
    
    constructor(private page: Page) {}

    async url() {
        await this.page.goto('https://rdot.in/public/login');
    }

    async cname(companyName: string)  
    {
        await this.page.locator('#companyname').fill(companyName);
    }

    async uname(userName: string)
    {
        await this.page.locator('#email').fill(userName);
    }
    async password(password: string)
    {
        await this.page.locator('#password').first().fill(password);
    }

    async submit()
    {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
    
    async crmlogin(companyName: string, userName: string, password: string) {
        await this.url();
        await this.cname(companyName);
        await this.uname(userName);
        await this.password(password);
        await this.submit();
    } 
}