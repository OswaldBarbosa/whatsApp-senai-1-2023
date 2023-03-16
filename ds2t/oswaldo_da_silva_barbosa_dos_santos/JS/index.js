'use strict'

import { contatos } from './contatos.js'

const criarCard = (contatos) => {
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
        container.replaceChildren()
    })

    card.append(foto, name, description)

    return card
}

const carregarContatos = () => {
    const container__contacts = document.getElementById('main__left')
    const card = contatos.map(criarCard)

    container__contacts.replaceChildren(...card)
}

carregarContatos()