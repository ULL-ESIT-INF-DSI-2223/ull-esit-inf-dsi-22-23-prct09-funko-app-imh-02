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
 import {FilterMapAddReduce} from '../../src/modif/add-reduce.js';
 import {clientCode} from '../../src/modif/client.js';
 
 describe('FilterMapAddReduce', () => {
   const addReduce = new FilterMapAddReduce([1,2,3,4], i => i >= 2, i => i * 2);
   it("Método run con clientCode para addReduce resulta 18", () => {
     expect(clientCode(addReduce)).to.be.eql(18);
   });
   it("Método filter para addReduce resulta [2,3,4] ", () => {
    expect(addReduce.filter([1,2,3,4], i => i >= 2)).to.be.eql([2,3,4]);
    });
    it("Método map para addReduce resulta [4,6,8] ", () => {
        expect(addReduce.map([2,3,4], i => i * 2)).to.be.eql([4,6,8]);
    });
    it("Método reduce para addReduce resulta  ", () => {
        expect(addReduce.reduce([4,6,8])).to.be.eql(18);
    });

    it("Método afterFilter para addReduce resulta  2,3,4", () => {
        expect(addReduce.afterFilter([2,3,4])).to.be.eql("2,3,4");
    });

    it("Método afterMap para addReduce resulta  4,6,8", () => {
        expect(addReduce.afterMap([4,6,8])).to.be.eql("4,6,8");
    });

 
 });