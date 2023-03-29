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

 import 'mocha';
 import {expect} from 'chai';
 import {FilterMapSubReduce} from '../../src/modif/sub-reduce.js';
 import {clientCode} from '../../src/modif/client.js';
 
 describe('Getter y setters de un Funko', () => {
   const subReduce = new FilterMapSubReduce([1,2,3,4], i => i >= 2, i => i * 2);
   it("Método run para subReduce resulta 6", () => {
     expect(clientCode(subReduce)).to.be.eql(6);
   });
   it("Método filter para subReduce resulta [2,3,4] ", () => {
    expect(subReduce.filter([1,2,3,4], i => i >= 2)).to.be.eql([2,3,4]);
    });
    it("Método map para subReduce resulta [4,6,8] ", () => {
        expect(subReduce.map([2,3,4], i => i * 2)).to.be.eql([4,6,8]);
    });

    it("Método reduce para subReduce resulta  6", () => {
        expect(subReduce.reduce([4,6,8])).to.be.eql(6);
    });

    

 
 });