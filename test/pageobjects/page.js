import { browser, $ } from '@wdio/globals'

/** BasePage contém métodos e comportamentos compartilhados entre todos os Page Objects do projeto.
 */
export default class Page {

    /** Navega para um caminho relativo ao baseUrl configurado no wdio.conf.js*/
    open(path) {
        return browser.url(path)
    }

    /** Aguarda um elemento estar visível na tela antes de interagir com ele*/
    async waitForVisible(selector) {
        const element = await $(selector)
        await element.waitForDisplayed({ timeout: 10000 })
        return element
    }
}