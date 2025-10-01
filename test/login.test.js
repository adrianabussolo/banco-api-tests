const request = require('supertest'); // interage com API
const { expect } = require('chai') // biblioteca chai
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

// descrever o teste: medtodo mocha para descrever o agrupamento do teste:
// dois parametros: 1. nome do teste e 2. uma função> function: () => {}
describe ('Login', () => {
     // um describe dentro do outro
    describe('POST /login', () => {     
        it('Deve retornar 200 com token em string com credencias válidas', async () => {

            // para clonar o postLogin, fazer uso do fixtures
            const bodyLogin = { ...postLogin }

            const resposta = await request(process.env.BASE_URL)
                // chamda de login e coloca a url:
                .post('/login')
                // seta cabeçaçjo para esta requisição:
                .set('Content-Type', 'application/json')
                // corpo da requisição:
                .send(bodyLogin)

                // fazer validações com chai:
                // espero que a resposta
            expect(resposta.status).to.equal(200);
               // espero que o token seja do tipo string: body: é o corpo da resposta
            expect(resposta.body.token).to.be.a('string');
            
        })
    })

})
