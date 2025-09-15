export const pedirCarta = ( deck ) => {

/** Esta función permite tomar una carta
 * @param {array<string>} deck es un arreglo de strings
 * @returns {string} retorna la carta del deck
 * @throws {string}  si el deck esta vacio
 */


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}