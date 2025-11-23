# Testes de API com Supertest

Projeto de testes automatizados para a API Restful Booker utilizando Jest e Supertest.

## 📋 Sobre o Projeto

Este projeto contém testes de API para validar os endpoints da API Restful Booker, focando em operações de reservas (bookings). Os testes são escritos em JavaScript usando Jest como framework de testes e Supertest para fazer requisições HTTP.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Jest** - Framework de testes
- **Supertest** - Biblioteca para testes de API HTTP

## 📦 Instalação

1. Certifique-se de ter o Node.js instalado (versão 14 ou superior)

2. Instale as dependências:
```bash
npm install
```

## 🧪 Executando os Testes

### Executar todos os testes
```bash
npm test
```

### Executar um cenário específico
```bash
npm run scenario "nome do teste"
```

Exemplo:
```bash
npm run scenario "cadastrar uma reserva"
```

## 📁 Estrutura do Projeto

```
supertest/
├── .github/
│   └── workflows/
│       └── test.yml          # Pipeline CI/CD GitHub Actions
├── tests/
│   ├── getReserva.test.js    # Testes para GET /booking
│   └── postReserva.test.js   # Testes para POST /booking
├── package.json
└── README.md
```

## 🔄 CI/CD - GitHub Actions

O projeto possui uma pipeline automatizada configurada no GitHub Actions que executa os testes automaticamente.

### Quando a pipeline é executada?

A pipeline é acionada automaticamente quando há:
- **Push** para as branches `main` ou `master`

### O que a pipeline faz?

1. ✅ Faz checkout do código do repositório
2. ✅ Configura o ambiente Node.js (versão 14)
3. ✅ Instala as dependências do projeto
4. ✅ Executa todos os testes automatizados

### Status da Pipeline

Você pode acompanhar o status da pipeline na aba **Actions** do repositório no GitHub. A pipeline garante que todos os testes passem antes de fazer merge para a branch principal.

### Arquivo de Configuração

A configuração da pipeline está localizada em `.github/workflows/test.yml`.

## 🧩 Testes Implementados

### GET /booking
- ✅ Deve retornar 200 ao fazer um GET em booking
- ✅ Deve retornar 200 ao fazer um GET em booking por id
- ✅ Deve retornar 200 ao fazer um GET em booking por id - Melhorias via gpt
- ✅ Deve retornar 404 ao fazer um GET em booking inexistente

### POST /booking
- ✅ Cadastrar uma reserva

## 🔗 API Testada

**Base URL:** `https://restful-booker.herokuapp.com/apidoc`

A API Restful Booker é uma API de demonstração para testes de automação.

## 📝 Estrutura de uma Reserva

```json
{
  "firstname": "Jim",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-01-01",
    "checkout": "2026-02-01"
  },
  "additionalneeds": "Breakfast"
}
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

