const request = require('supertest'); // interage com API
const { expect } = require('chai') // biblioteca chai
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe ('Transferencia', () => {
     // um describe dentro do outro
    describe('POST /transferencias', () => { 
        let token
        beforeEach(async () => {
              token = await obterToken('julio.lima', '123456')
        })    
        it('Deve retornar sucesso com 201 quando o valor for igual ou acima de R$ 10,00', async() => {
            console.log(process.env.BASE_URL)
            //capturar o Token: pega os dados do login
            
            // para clonar o postTransferencias, fazer uso do fixtures
            const bodyTransferencias = {...postTransferencias};

            const resposta = await request(process.env.BASE_URL)
                // chamda de login e coloca a url:
                .post('/transferencias')
                // seta cabeçaçjo para esta requisição:
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

                expect(resposta.status).to.equal(201);

                console.log(resposta.body)
                          
                })

                it('Deve retornar falha com 422 quando o vaor for abaixo de R$10,00', async() => {
           const bodyTransferencias = { ...postTransferencias }
           bodyTransferencias.valor = 7

            const resposta = await request('http://localhost:3000')
                // chamda de login e coloca a url:
                .post('/transferencias')
                // seta cabeçaçjo para esta requisição:
                .set('Content-Type', 'application/json')
               .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);

                 expect(resposta.status).to.equal(422);
                })
        
        }

    )
        
    })

