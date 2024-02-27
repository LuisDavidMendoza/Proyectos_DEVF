document.addEventListener('click', event => {
    const btnImpar = event.target.closest('.btn.impar')
    const btnPokemon = event.target.closest('.btn.pokemon')
    const btnTypeNumber = event.target.closest('.btn.arreglo')

    impar = () => {
        let i = 1
        for (i; i <= 50; i++) {
            // console.log('Número Impar: ', i)
            if (i % 2) {
                console.log('Número Impar: ', i, i % 2)
            }
            if ((i % 2) === 1) {
                console.log('Otra forma, Número Impar: ', i, i % 2)
            }
        }
    }
    let pokemons =
        ['bulbasaur',
            'ivysaur',
            'venusaur',
            'charmander',
            'charmeleon',
            'charizard',
            'squirtle',
            'wartortle',
            'blastoise',
            'caterpie',
            'metapod',
            'butterfree',
            'weedle',
            'kakuna',
            'beedrill',
            'pidgey',
            'pidgeotto',
            'pidgeot',
            'rattata',
            'raticate',
            'spearow',
            'fearow',
            'ekans',
            'arbok',
            'pikachu',
            'raichu',
            'sandshrew',
            'sandslash',
            'nidoran-f',
            'nidorina',
            'nidoqueen',
            'nidoran-m',
            'nidorino',
            'nidoking',
            'clefairy',
            'clefable',
            'vulpix',
            'ninetales',
            'jigglypuff',
            'wigglytuff',
            'zubat',
            'golbat',
            'oddish',
            'gloom',
            'vileplume',
            'paras',
            'parasect',
            'venonat',
            'venomoth',
            'diglett',
            'dugtrio',
            'meowth',
            'persian',
            'psyduck',
            'golduck',
            'mankey',
            'primeape',
            'growlithe',
            'arcanine',
            'poliwag',
            'poliwhirl',
            'poliwrath',
            'abra',
            'kadabra',
            'alakazam',
            'machop',
            'machoke',
            'machamp',
            'bellsprout',
            'weepinbell',
            'victreebel',
            'tentacool',
            'tentacruel',
            'geodude',
            'graveler',
            'golem',
            'ponyta',
            'rapidash',
            'slowpoke',
            'slowbro',
            'magnemite',
            'magneton',
            'farfetchd',
            'doduo',
            'dodrio',
            'seel',
            'dewgong',
            'grimer',
            'muk',
            'shellder',
            'cloyster',
            'gastly',
            'haunter',
            'gengar',
            'onix',
            'drowzee',
            'hypno',
            'krabby',
            'kingler',
            'voltorb']
    pokemon = () => {
        let numberPokemon = Number(prompt('Introduce un número Pokémon'))
        let i = 0
        for (i; i <= numberPokemon; i++) {
            if ((i % 5) === 0) {
                console.log('Número Pokémon', pokemons[i])
            }
        }
    }
    typeNumber = () => {
        let whatIs = [4, "dos", 8, "tres", 5, 9, 1, "cero"]
        let answer = []
        let i = 0
        for (i; i < whatIs.length; i++) {
            if (Number(whatIs[i])) {
                console.log('Es tipo número', whatIs[i])
            }
        }
    }
    if (btnImpar) {
        impar()
    } else if (btnPokemon) {
        pokemon()
    } else if (btnTypeNumber) {
        typeNumber()
    }
})