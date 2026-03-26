import { $ } from '@wdio/globals'
import Page from './page.js';
import { fecharAnuncios } from '../helpers/userData.js'

/** Page Object das páginas de cadastro.
 * Cobre a tela de inserção de nome/email e o formulário completo de criação de conta.*/

class CadastroPage extends Page {

    /*Formulario Inicial*/
    /** Campo de nome na tela inicial de signup */
    get campoNome() { return $('[data-qa="signup-name"]') }

    /** Campo de email na tela inicial de signup */
    get campoEmail() { return $('[data-qa="signup-email"]') }

    /** Botão de signup */
    get botaoSignup() { return $('[data-qa="signup-button"]') }

    //Formulario completo

     /** Seleção de título Mrs */
    get tituloMrs() { return $('#id_gender2') }

    /** Campo de senha */
    get campoSenha() { return $('[data-qa="password"]') }

    /** Select de dia de nascimento */
    get selectDia() { return $('[data-qa="days"]') }

    /** Select de mês de nascimento */
    get selectMes() { return $('[data-qa="months"]') }

    /** Select de ano de nascimento */
    get selectAno() { return $('[data-qa="years"]') }

    /** Checkbox de newsletter */
    get checkboxNewsletter() { return $('#newsletter') }

    /** Checkbox de ofertas de parceiros */
    get checkboxOfertas() { return $('#optin') }

    /** Campo de primeiro nome */
    get campoFirstName() { return $('[data-qa="first_name"]') }

    /** Campo de sobrenome */
    get campoLastName() { return $('[data-qa="last_name"]') }

    /** Campo de empresa */
    get campoEmpresa() { return $('[data-qa="company"]') }

    /** Campo de endereço */
    get campoEndereco() { return $('[data-qa="address"]') }

    /** Campo de endereço 2 */
    get campoEndereco2() { return $('[data-qa="address2"]') }

    /** Select de país */
    get selectPais() { return $('[data-qa="country"]') }

    /** Campo de estado */
    get campoEstado() { return $('[data-qa="state"]') }

    /** Campo de cidade */
    get campoCidade() { return $('[data-qa="city"]') }

    /** Campo de CEP */
    get campoCep() { return $('[data-qa="zipcode"]') }

    /** Campo de celular */
    get campoCelular() { return $('[data-qa="mobile_number"]') }

    /** Botão de criar conta */
    get botaoCriarConta() { return $('[data-qa="create-account"]') }

    //Preenche formulario inicial de criação
    async preencherFormularioSignup(nome, email) {
        await fecharAnuncios()
        await this.campoNome.setValue(nome)
        await this.campoEmail.setValue(email)
        await this.botaoSignup.click()

    }

    //Preenche formulario completo de criação de conta
    async preencherFormularioCriarConta(dados) {
        await fecharAnuncios()
        await this.tituloMrs.click()
        await this.campoSenha.setValue(dados.senha)
        await this.selectDia.selectByIndex(10)
        await this.selectMes.selectByIndex(5)
        await this.selectAno.selectByIndex(3)
        await this.checkboxNewsletter.click()
        await this.checkboxOfertas.click()
        await this.campoFirstName.setValue(dados.nome)
        await this.campoLastName.setValue(dados.sobrenome)
        await this.campoEmpresa.setValue(dados.empresa)
        await this.campoEndereco.setValue(dados.endereco)
        await this.campoEndereco2.setValue(dados.endereco2)
        await this.selectPais.selectByIndex(1)
        await this.campoEstado.setValue(dados.estado)
        await this.campoCidade.setValue(dados.cidade)
        await this.campoCep.setValue(dados.cep)
        await this.campoCelular.setValue(dados.celular)
        await this.botaoCriarConta.click()
    }
}

export default new CadastroPage()