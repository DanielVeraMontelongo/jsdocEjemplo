/**
 * @module funciones
 */

/**
 * Esta variable es un array con las edades de los usuarios
 * @type {Array<number>}
 */
const userAges = [30, 25, 40];
/**
 * Esta función devuelve una promesa con la edad encontrada <br>
 * Puedes ver un tutorial de cómo tratar la promesa en {@tutorial tutorialHTML}
 * @param {number} age 
 * @returns {Promise<number>}
 */
const getAges = (age)=>{
    return new Promise((resolve)=>{
        resolve(userAges.find(userAge => userAge == age))
    })
}