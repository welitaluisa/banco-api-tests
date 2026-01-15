require('dotenv').config();

const request = require('supertest');
const { expect } = require('chai');

describe('Transferências', () => {

  async function realizarLogin() {
    const respostaLogin = await request(process.env.BASE_URL)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({
        username: 'julio.lima',
        senha: '123456'
      });

    return respostaLogin.body.token;
  }

  describe('POST /transferencias', () => {

    it('Deve retornar sucesso com 201 quando o valor da transferência for maior ou igual a 10,00', async () => {
      const token = await realizarLogin();

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: '1',
          contaDestino: '2',
          valor: 10.00
        });

      expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha com 422 quando o valor da transferência for menor que 10,00', async () => {
      const token = await realizarLogin();

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: '1',
          contaDestino: '2',
          valor: 9.99
        });

      expect(resposta.status).to.equal(422);
    });

  });

});
