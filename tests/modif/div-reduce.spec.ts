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
 import {FilterMapDivReduce} from '../../src/modif/div-reduce.js';
 import {clientCode} from '../../src/modif/client.js';
 
 describe('Getter y setters de un Funko', () => {
   const divReduce = new FilterMapDivReduce([1,2,3,4], i => i >= 2, i => i * 2);
   it("Método run para divReduce resulta 5.33", () => {
     expect(clientCode(divReduce)).to.be.eql(5.33);
   });
   it("Método filter para divReduce resulta [2,3,4] ", () => {
    expect(divReduce.filter([1,2,3,4], i => i >= 2)).to.be.eql([2,3,4]);
    });
    it("Método map para divReduce resulta [4,6,8] ", () => {
        expect(divReduce.map([2,3,4], i => i * 2)).to.be.eql([4,6,8]);
    });

    it("Método reduce para divReduce resulta  5.33", () => {
        expect(divReduce.reduce([4,6,8])).to.be.eql(5.33);
    });

    it("Método afterFilter para divReduce resulta  2,3,4", () => {
        expect(divReduce.afterFilter([2,3,4])).to.be.eql("2,3,4");
    });

    it("Método afterMap para divReduce resulta  4,6,8", () => {
        expect(divReduce.afterMap([4,6,8])).to.be.eql("4,6,8");
    });
    
    it("Método afterFilter para divReduce resulta  2,3,4", () => {
        expect(divReduce.afterFilter([2,3,4])).to.be.eql("2,3,4");
    });

    it("Método afterMap para divReduce resulta  4,6,8", () => {
        expect(divReduce.afterMap([4,6,8])).to.be.eql("4,6,8");
    });
 
 });