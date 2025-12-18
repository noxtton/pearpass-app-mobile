import BasePage from '@pages/BasePage';
import signUpLocators from '@locators/SignUpLocators';

class SignUpPage extends BasePage {
  protected selectors = signUpLocators

  async waitForLoaded(): Promise<void> {
    await this.waitForDisplayed('')
    await this.waitForDisplayed('')
  }
}

export default SignUpPage;
