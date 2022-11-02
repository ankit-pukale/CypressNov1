///<reference types='cypress' />
describe('Verify all traverse methods',function(){
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('01-children()',function(){        
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().should('have.length',5)
    })
    it('02-first()',function(){       
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().first().should('have.class','selected')
    })
    it('03-last()',function(){        
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().last().should('contain','Popular')
    })
    it('04-find()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().last().find('a').should('have.text','Popular Drama')
    })
    it('05-eq()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.char-list').children().eq(5).should('contain','D')
    })
    it('06-filter',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().filter('.selected').should('have.class','selected')
    })
    it('07-siblings',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().first().siblings().should('have.length',4)
    })
    it('08-next()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().first().next().should('contain','Drama')
    })
    it('09-prev()',()=>{
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().last().prev().should('contain','KShow')
    })
    it('10-prevUntil()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().last().prevUntil('.selected').should('have.length',3)
    })
    it('11-prevAll()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.char-list').children().last().prevAll().should('have.length',27)
    })
    it('12-nextUntil()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().last().click()
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().first().nextUntil('.selected').should('have.length',4)
    })
    it('13-nextAll()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().first().nextAll().should('have.length',4)
    })
    it('14-not()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.navbar').children().not('.selected').should('have.length',4)
    })
    it('15-closest()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.sub-nav').first().closest('nav').should('have.class','menu_top')
    })
    it('16-parent()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.selected').first().parent().should('have.class','navbar')
    })
    it('17-parents()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.sub-nav').first().parents().should('have.class','navbar')
    })
    it('17-parentUntil()',function(){
        cy.visit('https://dramacool.sr/')
        cy.get('.sub-nav').first().parentsUntil('.menu_top').should('have.length',2)
    })
})