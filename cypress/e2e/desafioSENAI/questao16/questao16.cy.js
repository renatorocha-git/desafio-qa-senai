/// <reference types="cypress" />

describe('Teste de Login', () => {
    // Antes de cada teste, navega para a página de login
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@example.com');
        cy.get('#cpf').type('123.456.789-00');
        cy.get('#senha').type('senhaSegura123');
        cy.get('button[type="submit"]').click();

        // Valida que o login foi bem-sucedido, por exemplo, redirecionando para o dashboard
        cy.url().should('include', '/dashboard');
        cy.contains('Bem-vindo').should('be.visible');
    });

    it('Deve exibir mensagem de erro para credenciais inválidas', () => {
        cy.get('#email').type('email-invalido@example.com');
        cy.get('#cpf').type('123.456.789-00');
        cy.get('#senha').type('senhaErrada123');
        cy.get('button[type="submit"]').click();

        // Valida que a mensagem de erro aparece
        cy.contains('Credenciais inválidas').should('be.visible');
        cy.url().should('include', '/login');
    });

    it('Deve exibir validação para campos obrigatórios', () => {
        cy.get('button[type="submit"]').click();

        // Valida que mensagens de erro aparecem para campos obrigatórios
        cy.get('#email-error').should('contain', 'Email é obrigatório');
        cy.get('#cpf-error').should('contain', 'CPF é obrigatório');
        cy.get('#senha-error').should('contain', 'Senha é obrigatória');
    });

    it('Deve exibir validação para CPF inválido', () => {
        cy.get('#email').type('usuario@example.com');
        cy.get('#cpf').type('123456'); // CPF inválido
        cy.get('#senha').type('senhaSegura123');
        cy.get('button[type="submit"]').click();

        // Valida que a mensagem de erro aparece para CPF inválido
        cy.get('#cpf-error').should('contain', 'CPF inválido');
    });
});

