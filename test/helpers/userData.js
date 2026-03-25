import { faker } from '@faker-js/faker'

/** Gera dados aleatórios para criação de um novo usuário.
 * Cada chamada retorna um conjunto de dados único.*/

export function gerarDadosUsuario() {
    return {
        nome: faker.person.firstName(),
        email: `test_${Date.now()}@automationtest.com`,
        senha: faker.internet.password({ length: 10 }),
        sobrenome: faker.person.lastName(),
        empresa: faker.company.name(),
        endereco: faker.location.streetAddress(),
        endereco2: faker.location.secondaryAddress(),
        estado: faker.location.state(),
        cidade: faker.location.city(),
        cep: faker.location.zipCode('#####'),
        celular: faker.phone.number({ style: 'national' }),
    }
}

/**
 * Remove iframes de anúncios que bloqueiam a interação com os elementos da página.
 * Não quebra caso não existam anúncios ou a página ainda esteja carregando.*/
export async function fecharAnuncios() {
    try {
        await browser.execute(() => {
            const iframes = document.querySelectorAll('iframe[id^="aswift"]')
            iframes.forEach(iframe => iframe.remove())
        })
    } catch (e) {
    }
}