'use strict'

import { contatos } from './contatos.js'

const criarCard = (contatos, indice) => {
    const card = document.createElement('div')
    card.classList.add('card__contacts')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.src = `./${contatos.image}`

    const name = document.createElement('p')
    name.classList.add('card__name')
    name.textContent = contatos.name

    const description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = contatos.description

    card.addEventListener('click', () => {
        let container = document.getElementById('main__rigth')
        container.replaceChildren(criarHeaderMensagens(indice), criarContainerMensagens(indice), criarFooterMensagens())
    })

    card.append(foto, name, description)

    return card
}

const criarHeaderMensagens = (indice) => {
    const header = document.createElement('div')
    header.classList.add('barra__mensagens')

    const foto = document.createElement('img')
    foto.classList.add('foto__mensagens')
    foto.src = `./${contatos[indice].image}`

    const nomeContato = document.createElement('h5')
    nomeContato.classList.add('title__mensagens')
    nomeContato.textContent = contatos[indice].name

    header.append(foto, nomeContato)

    return header
}

const criarContainerMensagens = (indice) => {
    const containerMensagens = document.createElement('div')
    containerMensagens.classList.add('container__mensagens')

    contatos[indice].messages.forEach((mensagens) => {

        const caixaMensagemMinha = document.createElement('div')
        caixaMensagemMinha.classList.add('caixa-mensagem-minha')

        const mensagemMinha = document.createElement('p')
        mensagemMinha.classList.add('mensagem-minha')

        const horaMinha = document.createElement('p')
        horaMinha.classList.add('hora-minha')

        const caixaMensagemSua = document.createElement('div')
        caixaMensagemSua.classList.add('caixa-mensagem-sua')

        const mensagemSua = document.createElement('p')
        mensagemSua.classList.add('mensagem-sua')

        const horaSua = document.createElement('p')
        horaSua.classList.add('hora-sua')

        if (mensagens.sender == "me") {
            mensagemMinha.classList.add('mensagem-minha')
            mensagemMinha.textContent = mensagens.content

            horaMinha.classList.add('hora-minha')
            horaMinha.textContent = mensagens.time

            containerMensagens.append(caixaMensagemMinha, caixaMensagemSua)
            caixaMensagemSua.append(mensagemSua, horaSua)

        } else if (mensagens.sender == contatos[indice].name) {
            mensagemSua.classList.add('mensagem-sua')
            mensagemSua.textContent = mensagens.content

            horaSua.classList.add('hora-sua')
            horaSua.textContent = mensagens.time

            containerMensagens.append(caixaMensagemMinha, caixaMensagemSua)
            caixaMensagemSua.append(mensagemSua, horaSua)
        }
    })
    return containerMensagens
}

const criarFooterMensagens = () => {
    const containerMensagensFooter = document.createElement('div')
    containerMensagensFooter.classList.add('footer__mensagens')

    const icons = document.getElementById('emoji__anexar')
    icons.classList.remove('emoji__anexar')
    icons.classList.add('emoji__anexar__on')

    const iconMicrofone = document.getElementById('iconMicrofone')
    iconMicrofone.classList.remove('microfone-none')
    iconMicrofone.classList.add('microfone')

    const inputMensagem = document.createElement('input')
    inputMensagem.placeholder = 'Mensagem'
    inputMensagem.classList.add('input__mensagem')

    containerMensagensFooter.append(inputMensagem, icons, iconMicrofone)

    return containerMensagensFooter
}

const carregarContatos = () => {
    const container__contacts = document.getElementById('main__left')
    const card = contatos.map(criarCard)

    container__contacts.replaceChildren(...card)
}

carregarContatos()