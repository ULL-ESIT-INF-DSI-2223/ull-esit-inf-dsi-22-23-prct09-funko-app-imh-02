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

/**
 * Clase abstracta con el template
 */
export abstract class listOperations {

    /**
     * Constructor
     * @param NumberList Lista de números
     * @param filter_callback Callback de filter
     * @param callback_function_map Callback de map
     */
    constructor(protected NumberList: number[], protected filter_callback: (item: number) => boolean, protected callback_function_map: (item: number) => number) {

    }

    /**
     * Método template para los pasos 
     * @returns Retorna un number como resultado de las operaciones 
     */
    run() {
        const filter_result = this.filter(this.NumberList, this.filter_callback);
        this.afterFilter(filter_result);
        const map_result = this.map(filter_result, this.callback_function_map);
        this.afterMap(map_result);
        const reduce_result = this.reduce(map_result);
        return reduce_result;
    }

    // Métodos con operaciones por defecto

    /**
     * 
     * @param elements 
     * @param callback_function 
     * @returns 
     */
    filter(elements: number[], callback_function: (item: number) => boolean): number[]{
        const result: number[] = [];
        elements.forEach((element) => {
            if (callback_function(element) === true) {
                result.push(element);
            }
        });
        return result;
    }

    map(elements: number[], callback_function: (item: number) => number): number[]{
        const result: number[] = [];
        elements.forEach((element) => {
         result.push(callback_function(element));
        }); 
        return result;
    }

    // Método con operaciones abstractas
    abstract reduce(elements: number[]): number;

    // Métodos hook
    afterFilter(list: number[]): string {
        return list.toString(); 
    };
    afterMap(list: number[]):string {
        return list.toString();
    };


}