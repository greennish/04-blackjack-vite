import _ from 'underscore';

// Esta función crea un nuevo deck
// export const miNombre = 'Fernando';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta  ejemplo: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales  ejemplo: ['A','J','Q','K']
 * @returns {array<string>}  retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
    throw new Error('Tipos de carta es obligatorio como un arreglo de string');

if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
    throw new Error('Tipos especiales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;
}
// export default crearDeck;