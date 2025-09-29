const request = require('supertest');
const { expect } = require('chai')
// descrever o teste: medtodo mocha para descrever o agrupamento do teste:
// dois parametros: 1. nome do teste e 2. uma função> function: () => {}
describe ('Login', () => {
     // um describe dentro do outro
    describe('POST /login', () => {     
        it('Deve retornar 200 com token em string com credencias válidas', async () => {
            const resposta = await request('http://localhost:3000')
                // chamda de login e coloca a url:
                .post('/login')
                // seta cabeçaçjo para esta requisição:
                .set('Content-Type', 'application/json')
                // corpo da requisição:
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'   
                })
                // fazer validações com chai:
                // espero que a resposta 
            expect(resposta.status).to.equal(200);
               // espero que o token seja do tipo string: body: é o corpo da resposta
            expect(resposta.body.token).to.be.a('string');
            
        })
    })

})
