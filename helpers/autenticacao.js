require('dotenv').config();

const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json');

const obterToken = async () => {
  
  const bodyLogin = { ...postLogin}

  const respostaLogin = await request(process.env.BASE_URL)
    .post('/login')
    .set('Content-Type', 'application/json')
    .send(bodyLogin);

  if (!respostaLogin.body.token) {
    throw new Error('Token não retornado no login');
  }

  return respostaLogin.body.token;
}

module.exports = {
  obterToken
};
