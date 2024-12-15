/// <reference types="cypress" />


describe('Testes Funcionais Questão 14', () => {

  it('Acessar teste Apenas com Link', () => {
    cy.visit('https://form.jotform.com/243492532845058')
    // Aqui depois que acessa mostra o titulo da prova
    cy.get('#header_1').should('have.text', 'Prova OnLine para Analista de QA - SENAI')

  });

  it('Fazer Upload da Foto com sucesso', () => {
    cy.visit('https://form.jotform.com/243492532845058');
    // Caminho relativo do arquivo a ser carregado
    const arquivoLocalPequeno = 'cypress/fixtures/upload/Labrador.png';
    cy.get('#input_4').selectFile(arquivoLocalPequeno, { force: true })
    cy.get('.qq-upload-size').should('contain', 'MB')
  });

  it('Fazer Upload Com mais de uma foto', () => {
    cy.visit('https://form.jotform.com/243492532845058');
    // Caminho relativo do arquivo a ser carregado
    const arquivoLocalPequeno = 'cypress/fixtures/upload/Labrador.png';

    cy.get('#input_4').selectFile(arquivoLocalPequeno, { force: true });
    cy.get('#input_4').selectFile(arquivoLocalPequeno, { force: true });

    cy.get('.form-error-message > .error-navigation-message')
      .should('contain', 'Only 1 file uploads allowed.')
  });

  it('Fazer Upload com tamanho acima de 10MB', () => {
    cy.visit('https://form.jotform.com/243492532845058');
    // Caminho relativo do arquivo a ser carregado
    const arquivoLocalGrande = 'cypress/fixtures/upload/ArquivoMaiorque10MB.zip';

    cy.get('#input_4').selectFile(arquivoLocalGrande, { force: true });

    cy.get('.form-error-message > .error-navigation-message')
      .should('contain', 'maximum file size is 10.6MB.')
  });

  it('Preencher Nome Completo com Sucesso', () => {
    cy.visit('https://form.jotform.com/243492532845058');

    cy.get('#input_5')
      .type('Paulo Renato Paes da Rocha Vanderlei')
      .should('have.value', 'Paulo Renato Paes da Rocha Vanderlei')
  });

  it('Deixar algum campo vazio', () => {
    cy.visit('https://form.jotform.com/243492532845058');
    cy.get('#input_2').click()

    cy.get('.form-error-message > .error-navigation-message')
      .should('contain', 'This field is required.')
  });

})
