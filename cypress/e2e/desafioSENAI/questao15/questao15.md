# Caso de Teste: Agendamento de Consulta Odontológica

---

## Identificação

- **ID do Caso de Teste:** TC001  
- **Funcionalidade Testada:** Agendamento de consultas  
- **Data de Criação:** 02/10/2024  
- **Autor:** Renato Rocha  

### Pré-requisitos:
- O usuário deve estar logado no aplicativo.  
- Deve haver pelo menos um profissional cadastrado na clínica.  
- A funcionalidade de agenda deve estar disponível.  

## Descrição
Este caso de teste valida o comportamento do aplicativo móvel ao realizar o agendamento de uma consulta odontológica, cobrindo diferentes cenários de uso, como sucesso, falhas e validações.

---

## Cenários de Teste

### **Cenário 1: Validação de campos obrigatórios**

- **Objetivo:** Testar o comportamento do sistema quando campos obrigatórios não são preenchidos.  

#### **Passos:**
1. Acessar a funcionalidade de "Agendar Consulta".  
2. Deixar a especialidade ou o profissional em branco.  
3. Tentar prosseguir para a confirmação.  

#### **Dados de Teste:**
- Especialidade: (não preenchida)  
- Profissional: (não preenchido)  

#### **Resultado Esperado:**
- Mensagem de erro: "Por favor, preencha todos os campos obrigatórios."

---

### **Cenário 2: Agendamento bem-sucedido**

- **Objetivo:** Verificar se o usuário consegue agendar uma consulta com sucesso.  

#### **Passos:**
1. Abrir o aplicativo e realizar login.  
2. Acessar a funcionalidade de "Agendar Consulta".  
3. Selecionar a especialidade desejada (ex.: Ortodontia).  
4. Escolher um profissional disponível.  
5. Selecionar uma data e horário disponíveis.  
6. Confirmar o agendamento.  

#### **Dados de Teste:**
- Especialidade: Ortodontia  
- Profissional: Dr. João Silva  
- Data: 20/12/2024  
- Horário: 14:00  

#### **Resultado Esperado:**
- Mensagem de confirmação: "Sua consulta foi agendada com sucesso para o dia 20/12/2024 às 14:00 com Dr. João Silva."  
- O agendamento deve ser registrado na seção "Minhas Consultas".

---

### **Cenário 3: Tentativa de agendar em horário indisponível**

- **Objetivo:** Verificar se o sistema impede o agendamento em horários ocupados.  

#### **Passos:**
1. Repetir os passos 1 a 5 do Cenário 2.  
2. Selecionar um horário já ocupado.  

#### **Dados de Teste:**
- Data: 20/12/2024  
- Horário: 14:00 (já ocupado)  

#### **Resultado Esperado:**
- Mensagem de erro: "O horário selecionado não está disponível. Por favor, escolha outro horário."

---

### **Cenário 4: Cancelamento de agendamento antes da confirmação**

- **Objetivo:** Garantir que o usuário possa cancelar um agendamento antes de confirmá-lo.  

#### **Passos:**
1. Acessar a funcionalidade de "Agendar Consulta".  
2. Preencher todos os dados necessários.  
3. Clicar em "Cancelar" antes de confirmar o agendamento.  

#### **Dados de Teste:**
- Especialidade: Periodontia  
- Profissional: Dra. Maria Oliveira  
- Data: /12/2024  
- Horário: 16:00  

#### **Resultado Esperado:**
- O sistema deve cancelar a ação sem registrar o agendamento.  
- Nenhuma consulta deve aparecer em "Minhas Consultas".

---

## Critérios de Aceitação

- O sistema deve ser capaz de lidar com todas as entradas válidas e inválidas conforme os cenários descritos.  
- Mensagens de erro e sucesso devem ser claras e informativas.  
- Agendamentos confirmados devem refletir na seção "Minhas Consultas".
