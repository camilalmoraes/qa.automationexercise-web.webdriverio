import homePage from "../pageobjects/home.page.js"
import cadastroPage from "../pageobjects/cadastroPage.js"
import accountPage from "../pageobjects/account.page.js"
import { gerarDadosUsuario, fecharAnuncios } from "../helpers/userData.js"

describe('Registro de Usuário', () => {

    it('Deve registrar e deletar um usuário com sucesso', async () => {

        //Arrange
        const dados = gerarDadosUsuario()

        //Act
        await homePage.open()
        await homePage.clickSignupLogin()

        await cadastroPage.preencherFormularioSignup(dados.nome, dados.email)

        await cadastroPage.preencherFormularioCriarConta(dados)

        await accountPage.clicarContinue()

        await accountPage.deletarConta()

        //Asserts
        await expect(accountPage.textoContaDeletada).toBeDisplayed()
        await expect(accountPage.botaoContinue).toBeDisplayed()
    })
})
