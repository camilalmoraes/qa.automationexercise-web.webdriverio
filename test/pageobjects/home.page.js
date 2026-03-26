import { $ } from '@wdio/globals'
import Page from './page.js'
import { fecharAnuncios } from '../helpers/userData.js'

/** Page Object da página inicial do site.
 * Contém os elementos e ações disponíveis na Home.
 */

class HomePage extends Page {

    /** Botão de navegação para a página de Signup/Login */
    get signupLoginButton() { return $('a[href="/login"]') }

    /** Navega para a página inicial do site */
    async open() {
        await super.open('/')
        await fecharAnuncios()
    }

    /** Clica no botão Signup/Login e navega para a página de cadastro */
    async clickSignupLogin() {
        await fecharAnuncios()
        await this.signupLoginButton.click()
    }
}

export default new HomePage()