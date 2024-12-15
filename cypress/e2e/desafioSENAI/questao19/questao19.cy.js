describe('Teste de Performance com Cypress', () => {
    it('Deve verificar o tempo de carregamento da página', () => {
        // Aqui Define o tempo máximo esperado (em ms)
        const tempoMaximoCarregamento = 2000; // 2 segundos

        cy.visit('/', {
            onLoad: (window) => {
                // Serve para Obter o tempo de performance da API Performance do navegador
                const performance = window.performance;
                const timing = performance.timing;

                const tempoCarregamento = timing.loadEventEnd - timing.navigationStart;
                cy.log(`Tempo de carregamento: ${tempoCarregamento}ms`);

                // Assertiva para verificar se o tempo de carregamento está dentro do limite
                expect(tempoCarregamento).to.be.lessThan(tempoMaximoCarregamento);
            },
        });
    });

    it('Deve medir o tempo de resposta de uma API', () => {
        const tempoMaximoRespostaAPI = 1000; // 1 segundo

        cy.request('GET', '/api/exemplo')
            .its('duration')
            .then((duracao) => {
                cy.log(`Tempo de resposta da API: ${duracao}ms`);
                expect(duracao).to.be.lessThan(tempoMaximoRespostaAPI);
            });
    });
});
