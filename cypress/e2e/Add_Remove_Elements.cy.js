//Test Case 1//
import { add_remove_elements } from "../Pages/Add_Remove_Elements";
import { LOCATORS } from "../utils/locators";
import { basePage } from "../Pages/Base";

describe('Add_Remove_Elments', () => {
  it('Verify the functionality of Add_Remove_Elments', () => {
    cy.visit('/') 
    cy.contains(add_remove_elements.NAMES.contentText).click();
    cy.url().should('include',`/${add_remove_elements.NAMES.add_remove_elements}/`),
    cy.get (add_remove_elements.LOCATORS.content).should('contain',add_remove_elements.NAMES.contentText)
    cy.get('.example').find('button').then((btn)=> {
        expect(btn).to.contain(add_remove_elements.NAMES.addElementButton);
        cy.wrap(btn).click()
        })
    cy.get ('.added-manually').should('contain',add_remove_elements.NAMES.deleteButton).click();

  })
  it('Verify the functionality of Add_Remove_Elments', () => {
    cy.visit('/') 
    cy.contains(add_remove_elements.NAMES.contentText).click();
    cy.url().should('include',`/${add_remove_elements.NAMES.add_remove_elements}/`),
    cy.get (add_remove_elements.LOCATORS.content).should('contain',add_remove_elements.NAMES.contentText)
    cy.get('.example').find('button').then((btn)=> {
        expect(btn).to.contain(add_remove_elements.NAMES.addElementButton);
        cy.wrap(btn).click()
        })
    cy.get('.added-manually').should('contain',add_remove_elements.NAMES.deleteButton)
  })
  it.only("Verify the functionality of Add/Remove button", () => {
    cy.visit('/') 
    cy.contains(add_remove_elements.NAMES.contentText).click();
    cy.url().should("include", `/${add_remove_elements.NAMES.add_remove_elements}/`);
    cy.get(basePage.LOCATORS.content).should(
      "contain",
      add_remove_elements.NAMES.contentText
    );

    basePage
      .getExample()
      .find(LOCATORS.button)
      .then((btn) => {
        expect(btn).to.contain(add_remove_elements.NAMES.addElementButton);
        cy.wrap(btn).click();
      });

    basePage
      .getExample()
      .find(LOCATORS.elements)
      .find(LOCATORS.button)
      .should("contain", add_remove_elements.NAMES.deleteARE);
    basePage.getExample().find(LOCATORS.elements).find(LOCATORS.button).click();


    // Add element 20 times
    for (let i=1; i<=add_remove_elements.NAMES.loopCount; i++) {
        basePage
        .getExample()
        .find(LOCATORS.button).
        contains(add_remove_elements.NAMES.addElementButton)
        .click({multiple:true});
   };

   // Check button' count
   cy.get('.example')
   .find(LOCATORS.elements)
   .find(LOCATORS.button).as('deleteBtn');

   cy.get('@deleteBtn').its('length').should('eq',add_remove_elements.NAMES.loopCount);


  // Remove element 20 times
 
  for (let j=20; j>=1; j--) {
    cy.get('@deleteBtn')
     .then ((delBtn)=> {
        expect(delBtn).to.contain(add_remove_elements.NAMES.deleteARE);
        cy.wrap(delBtn).first().click({timeout:500});
       }
    ) ;
};
});
})

