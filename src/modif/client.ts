/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 9: Registro de Funko Pops
 * @author Ismael Martín Herrera
 * @email alu0101397375@ull.edu.es
 * @date 27/03/2023
 */

import { listOperations } from "./list-operation.js";

/**
 * Función que alberga el código del cliente
 * @param list_operations Operaciones que se realiarán
 * @returns Resultado de las operaciones
 */
export function clientCode(list_operations: listOperations) {
    return list_operations.run();
}