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
├── tests/
│   ├── getReserva.test.js    # Testes para GET /booking
│   └── postReserva.test.js   # Testes para POST /booking
├── package.json
└── README.md
```

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

