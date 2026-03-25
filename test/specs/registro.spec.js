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
        await fecharAnuncios()
        await homePage.clickSignupLogin()

        await fecharAnuncios()
        await cadastroPage.preencherFormularioSignup(dados.nome, dados.email)

        await fecharAnuncios()
        await cadastroPage.preencherFormularioCriarConta(dados)

        await fecharAnuncios()
        await accountPage.clicarContinue()

        await fecharAnuncios()
        await accountPage.deletarConta()

        //Asserts
        await expect(accountPage.textoContaDeletada).toBeDisplayed()
        await fecharAnuncios()
        await expect(accountPage.botaoContinue).toBeDisplayed()
    })
})
