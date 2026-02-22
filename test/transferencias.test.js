require('dotenv').config();

const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {
       let token;

    beforeEach(async () => {
     
         token = await obterToken('julio.lima', '123456');     
    });

  describe('POST /transferencias', () => {

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

  describe('GET /transferencias/{id}', () => {
      it('Deve retornar sucesso com 200 e dados iguais ao regitro de transferencia contido no banco de dados quando o ID for válido', async () => {
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias/20')        
        .set('Authorization', `Bearer ${token}`);

        expect(resposta.status).to.equal(200);
        expect(resposta.body.id).to.equal(20);      
        expect(resposta.body.id).to.be.a('number');// valida a tipagem do id
        expect(resposta.body.conta_origem_id).to.equal(1);
        expect(resposta.body.conta_destino_id).to.equal(2);
        expect(resposta.body.valor).to.equal(10.00);// Bug o valor no swagger esta como float e no banco de dados esta como string       
        expect(resposta.body).to.have.property('data_hora');       
     });

   });

   describe('GET /transferencias', () => {
    it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros ', async () => {
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias?page=1&limit=10')
        .set('Authorization', `Bearer ${token}`);
      expect(resposta.status).to.equal(200);
      expect(resposta.body.limit).to.equal(10);
      expect(resposta.body.transferencias).to.be.an('array').that.has.lengthOf(10);
    });
  })    
});
