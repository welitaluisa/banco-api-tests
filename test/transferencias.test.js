require('dotenv').config();

const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');

describe('Transferências', () => {

  describe('POST /transferencias', () => {
     let token;

    beforeEach(async () => {
     
         token = await obterToken('julio.lima', '123456');

      // Configurações ou pré-requisitos para os testes, se necessário
    });

    it('Deve retornar sucesso com 201 quando o valor da transferência for maior ou igual a 10,00', async () => {
    
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
