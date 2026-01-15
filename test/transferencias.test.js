const request = require('supertest');
const { expect } = require('chai');

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou maior que 10,00', async ()=> {
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: '123456'
                });
            const token = respostaLogin.body.token;    

            
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    contaOrigem: '1',
                    contaDestino: '2',
                    valor: 10.00,
                    token: ''
                });
            expect(response.status).to.equal(201);
        });

         it('Deve retornar falha com 422 quando o valor da transferencia for menor que 10,00', async ()=> {
             const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: '123456'
                });
            const token = respostaLogin.body.token;    

            
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    contaOrigem: '1',
                    contaDestino: '2',
                    valor: 9.99,
                    token: ''
                });
            expect(response.status).to.equal(422);
        });
  });
    
}) ;