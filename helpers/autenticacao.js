const request = require('supertest'); // interage com API
// função recebe obterToken/ função anonima
const obterToken = async (usuario, senha) => {
const respostaLogin = await request(process.env.BASE_URL)
            // chamda de login e coloca a url:
    .post('/login')
    // seta cabeçaçjo para esta requisição:
    .set('Content-Type', 'application/json')
    // corpo da requisição:
    .send({
        'username': usuario,
        'senha': senha  
    })
    // retorna o token q está no body q esta no resposta login
    return token = respostaLogin.body.token
              
}
// exporta a funçao obterToken para ser utilizada por outros arquivos
module.exports = {
    obterToken
}