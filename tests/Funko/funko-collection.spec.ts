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

// import 'mocha';
// import {expect} from 'chai';
// import {Funko, TiposFunko, GeneroFunko} from '../../src/funko/funko.js';
// import {FunkoCollection} from '../../src/funko/funko-collection.js';

// describe('Métodos de una colección de Funkos', () => {
//   const harryPotter = new Funko(1, "Harry Potter", "Personaje Principal de la saga Harry Potter", TiposFunko.POP, GeneroFunko.PELICULAS, "Harry Potter", 1, false, "Cabeza balancea", 20);
//   const capitanAmerica = new Funko(2,"Capitan América", "Tiene un escudo que le da poder", TiposFunko.POP, GeneroFunko.PELICULAS, "Marvel", 1, false, "Fuerza", 20);
//   const funkosCollection = new FunkoCollection([harryPotter, capitanAmerica]);
//   const SpiderMan = new Funko(3, "SpiderMan", "Es de color azul y rojo", TiposFunko.POP, GeneroFunko.ANIMACION, "SpiderMan", 3, false, "Puede crear telas de arañas", 25);
  
//   it("Añadir nuevo Funko a la colleción resulta [harryPotter,capitanAmerica, SpiderMan]", () => {
//     expect(funkosCollection.addFunko(SpiderMan)).to.be.eql([harryPotter, capitanAmerica, SpiderMan]);
//   }); 

//   it("Añadir nuevo Funko a la colleción resulta [harryPotter,capitanAmerica, SpiderMan]", () => {
//     expect(funkosCollection.addFunko(SpiderMan)).to.be.eql([harryPotter, capitanAmerica, SpiderMan]);
//   }); 

//   it("Obtener el funko con id 3 resulta SpiderMan", () => {
//     expect(funkosCollection.getFunkoId(3)).to.be.eql(SpiderMan);
//   }); 

//   it("Eliminar el funko con id 2 resulta [harryPotter, SpiderMan]", () => {
//     expect(funkosCollection.eraseFunko(2)).to.be.eql([harryPotter, SpiderMan]);
//   }); 

// });