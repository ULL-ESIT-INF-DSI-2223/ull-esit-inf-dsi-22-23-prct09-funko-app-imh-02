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
 import {FilterMapProdReduce} from '../../src/modif/prod-reduce.js';
 import {clientCode} from '../../src/modif/client.js';
 
 describe('FilterMapProdReduce', () => {
   const prodReduce = new FilterMapProdReduce([1,2,3,4], i => i >= 2, i => i * 2);
   it("Método run para prodReduce resulta 192", () => {
     expect(clientCode(prodReduce)).to.be.eql(192);
   });

   it("Método filter para prodReduce resulta [2,3,4] ", () => {
    expect(prodReduce.filter([1,2,3,4], i => i >= 2)).to.be.eql([2,3,4]);
    });

    it("Método reduce para prodReduce resulta  192", () => {
        expect(prodReduce.reduce([4,6,8])).to.be.eql(192);
    });

    it("Método map para prodReduce resulta [4,6,8] ", () => {
        expect(prodReduce.map([2,3,4], i => i * 2)).to.be.eql([4,6,8]);
    });

    it("Método afterFilter para prodReduce resulta  2,3,4", () => {
        expect(prodReduce.afterFilter([2,3,4])).to.be.eql("2,3,4");
    });

    it("Método afterMap para prodReduce resulta  4,6,8", () => {
        expect(prodReduce.afterMap([4,6,8])).to.be.eql("4,6,8");
    });


 
 });