const request = require('supertest'); // interage com API
const { expect } = require('chai') // biblioteca chai
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe ('Transferencia', () => {
       let token;
        beforeEach(async () => {
              token = await obterToken('julio.lima', '123456')
              
        })   
     // um describe dentro do outro
    describe('POST /transferencias', () => { 
      
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
        
        })
        
        describe('GET /transferencias/{id}', () => { 
            it('Deve retornar sucesso com 200 e dados iguais ao registro d etransferencia contido no banco de dados quando o id for válido', async () =>{
                const resposta = await request(process.env.BASE_URL)
                    .get('/transferencias/26')
                    .set('Authorization', `Bearer ${token}`)

                     console.log(resposta.body)
                     expect(resposta.status).to.equal(200)
                     expect(resposta.body.id).to.equal(26)
                     expect(resposta.body.id).to.be.a('number')
                     expect(resposta.body.conta_origem_id).to.equal(1)
                     expect(resposta.body.conta_destino_id).to.equal(2)
                     expect(resposta.body.valor).to.equal(11,00)
            }) 

        })
        describe('GET /transferencias', () => {
            it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async() => {
                const resposta = await request(process.env.BASE_URL)
                    .get('/transferencias?page=1&limit=10')
                    .set('Authorization', `Bearer ${token}`)

                
                expect(resposta.status).to.equal(200)
                expect(resposta.body.limit).to.equal(10)
                expect(resposta.body.transferencias).to.have.lengthOf(10)

            })

        })
    })

