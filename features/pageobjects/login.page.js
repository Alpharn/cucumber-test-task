class LoginPage {
    get loginButton() { return $("#login-button"); }
    get errorMessage() { return $(".error-message-container"); }
  
    async clickLoginButton() {
      await this.loginButton.click();
    }
  
    async getErrorMessageText() {
      return await this.errorMessage.getText();
    }
}

const loginPage = new LoginPage();
export default loginPage;