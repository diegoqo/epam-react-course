describe('template spec', () => {
  it('counter test', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('+').click()
    cy.contains('1')
    cy.contains('+').click()
    cy.contains('2')
    cy.contains('-').click()
    cy.contains('1')
  })

  it('select test', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=selectGenreSelect]').click()
    cy.contains('Documentary').click()
    cy.get('body').click(0,0)
    cy.get('[data-cy="selectGenreSelect"]').should('contain.text', 'Crime, Documentary')

  })
})
