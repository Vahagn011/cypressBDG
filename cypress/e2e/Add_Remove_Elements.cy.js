//Test Case 1//
import { add_remove_elements } from "../Pages/Add_Remove_Elements";

describe('Add_Remove_Elments', () => {
  it('Verify the functionality of Add_Remove_Elments', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.contains(add_remove_elements.NAMES.contentText).click();
    cy.url().should('include','/add_remove_elements/'),
    cy.get (add_remove_elements.LOCATORS.content).should('contain',add_remove_elements.NAMES.contentText)
    cy.get('.example').find('button').then((btn)=> {
        expect(btn).to.contain(add_remove_elements.NAMES.addElementButton);
        cy.wrap(btn).click()
        })
    cy.get ('.added-manually').should('contain',add_remove_elements.NAMES.deleteButton).click();

  })
  it('Verify the functionality of Add_Remove_Elments', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.contains(add_remove_elements.NAMES.contentText).click();
    cy.url().should('include','/add_remove_elements/'),
    cy.get (add_remove_elements.LOCATORS.content).should('contain',add_remove_elements.NAMES.contentText)
    cy.get('.example').find('button').then((btn)=> {
        expect(btn).to.contain(add_remove_elements.NAMES.addElementButton);
        cy.wrap(btn).click()
        })
    cy.get ('.added-manually').should('contain',add_remove_elements.NAMES.deleteButton).then

  })
})

