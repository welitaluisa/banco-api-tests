require('dotenv').config();

const request = require('supertest');

async function obterToken(username, senha) {
  const resposta = await request(process.env.BASE_URL)
    .post('/login')
    .set('Content-Type', 'application/json')
    .send({
      username,
      senha
    });

  if (!resposta.body.token) {
    throw new Error('Token não retornado no login');
  }

  return resposta.body.token;
}

module.exports = {
  obterToken
};
