require('dotenv').config();

const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {

  describe('POST /transferencias', () => {
     let token;

    beforeEach(async () => {
     
         token = await obterToken('julio.lima', '123456');     
    });

    it('Deve retornar sucesso com 201 quando o valor da transferência for maior ou igual a 10,00', async () => {
      const bodyTrasferencias = { ...postTransferencias}
             
      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send( bodyTrasferencias);

      expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha com 422 quando o valor da transferência for menor que 10,00', async () => {
      const bodyTrasferencias = { ...postTransferencias}
      bodyTrasferencias.valor = 9.99;

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send( bodyTrasferencias);

      expect(resposta.status).to.equal(422);
    });

  });

});
