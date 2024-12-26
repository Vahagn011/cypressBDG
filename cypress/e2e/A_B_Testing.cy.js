
import { a_b_testing } from "../Pages/A_B_Testing";
import { basePage } from "../Pages/Base";

describe('A_B_Testing', () => {
  it('Verify content in the page', () => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.contains(basePage.NAMES.abTesting).click();

    cy.get(basePage.LOCATORS.content).then((content) => {
      const contentText = content.text();
      if (contentText.includes(a_b_testing.NAMES.contentText)) {
        expect(contentText).to.include(a_b_testing.NAMES.contentText);
      } else if (contentText.includes(a_b_testing.NAMES.contentText1)) {
        expect(contentText).to.include(a_b_testing.NAMES.contentText1);
      } else {
        throw new Error('Text is unexpexted');
      }
    });
  });
});
