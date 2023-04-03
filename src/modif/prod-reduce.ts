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
  * Clase que hereda de listOperations y que añade la funcionalidad reduce con la multiplicación
  */
 export class FilterMapProdReduce extends listOperations {
     constructor(protected NumberList: number[], protected filter_callback: (item: number) => boolean, protected callback_function_map: (item: number) => number) {
         super(NumberList, filter_callback, callback_function_map);
     }
     
     /**
      * Función que multiplica todos los elementos de una lista
      * @param list Lista de números
      * @returns Multiplicación de todos los elementos de la lista
      */
     reduce(list: number[]) {
         let result = 1;
         list.forEach((item) => {
             result = result * item;
         });
         return result;
     } 
 }