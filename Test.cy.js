describe('Test', () => {
  it('Test', () => {
	/*Переход по поиску гугла реализовать не удалось, так как гугл забанил доступ через Cypress.
	Указание на данный факт имеется и на сайте Cypress по ссылке https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Step-1-Visit-a-page
	Цитата: "They may detect you are a script and block your access (Google does this)."
	*/
	cy.visit('https://byndyusoft.com/');
	cy.get('.know-more__container > .btn').click();
	cy.contains("8 800 775-15-21");
	cy.contains("sales@byndyusoft.com");
  })
})
