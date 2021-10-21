/* global describe, it, cy */

describe('My first test', () => {
  it('The app should works', () => {
    cy.visit('/')
  })

  it('Navigation to a category and see a photo', () => {
    cy.visit('/pet/1')
    cy.get('article') /* Get an CSS element */
  })

  it('Should navigate with the navbar to home', () => {
    cy.visit('/pet/1')

    cy.get('nav a').first().click() /* first, obtain the fist element of the selector */
    cy.url().should('include', '/')
  })

  it('Users not registered see the register form and will done to go to favs ', () => {
    cy.visit('/login')
    cy.get('form').should('have.length', 2)
  })
})
