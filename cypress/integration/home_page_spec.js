describe('Home page', () => {
  it('visits the home page and sees the title', () => {
    cy.visit("/")
    cy.get(".title").should("contain", "Gingergram") 
  })
})