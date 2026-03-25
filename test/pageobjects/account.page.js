import { $, browser } from '@wdio/globals'
import Page from './page.js'

/** Page Object das telas pós cadastro e deleção de conta.
 * Cobre a tela de conta criada, home logado e tela de conta deletada. */
class ContaPage extends Page {

    /** Botão Continue exibido após criar conta e após deletar conta */
    get botaoContinue() { return $('[data-qa="continue-button"]') }

    /** Botão Delete Account exibido na home quando o usuário está logado */
    get botaoDeletarConta() { return $('a[href="/delete_account"]') }

    /** Texto ACCOUNT DELETED! exibido após deletar a conta */
    get textoContaDeletada() { return $('[data-qa="account-deleted"]') }

    /** Aguarda o botão Continue aparecer e clica via JavaScript
     * para evitar interceptação por anúncios intersticiais */
    async clicarContinue() {
        await this.botaoContinue.waitForDisplayed({ timeout: 10000 })
        await browser.execute(() => {
            document.querySelector('[data-qa="continue-button"]').click()
        })
    }

    /** Aguarda o botão Delete Account aparecer e clica via JavaScript
     * para evitar interceptação por anúncios intersticiais */
    async deletarConta() {
        await this.botaoDeletarConta.waitForDisplayed({ timeout: 10000 })
        await browser.execute(() => {
            document.querySelector('a[href="/delete_account"]').click()
        })
    }
}

export default new ContaPage()