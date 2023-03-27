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
import {Funko, TiposFunko, GeneroFunko} from '../../src/funko/funko';

describe('Getter y setters de un Funko', () => {
  const harryPotter = new Funko(1, "Harry Potter", "Personaje Principal de la saga Harry Potter", TiposFunko.POP, GeneroFunko.PELICULAS, "Harry Potter", 1, false, "Cabeza balancea", 20);
  it("Getter del id resulta 1 ", () => {
    expect(harryPotter.id).to.be.eql(1);
  });

  it("Getter del nombre resulta 'Harry Potter' ", () => {
    expect(harryPotter.nombre).to.be.eql("Harry Potter");
  });
  
  it("Getter de la descripción resulta 'Personaje Principal de la saga Harry Potter' ", () => {
    expect(harryPotter.descripcion).to.be.eql("Personaje Principal de la saga Harry Potter");
  });

  it("Getter del tipo resulta Pop! ", () => {
    expect(harryPotter.tipo).to.be.eql(TiposFunko.POP);
  });

  it("Getter del género resulta Películas ", () => {
    expect(harryPotter.genero).to.be.eql(GeneroFunko.PELICULAS);
  });

  it("Getter de la franquicia resulta 'Harry Potter' ", () => {
    expect(harryPotter.tipo).to.be.eql("Harry Potter");
  });

  it("Getter del número de franquicia resulta 1", () => {
    expect(harryPotter.numeroFranquicia).to.be.eql(1);
  });

  it("Getter de exclusivo resulta false ", () => {
    expect(harryPotter.exclusivo).to.be.eql(false);
  });

  it("Getter de la característica especial resulta 'Cabeza balancea' ", () => {
    expect(harryPotter.caracteristicasEspeciales).to.be.eql("Cabeza balancea");
  });

  it("Getter del valor resulta 20 ", () => {
    expect(harryPotter.valor).to.be.eql(20);
  });

});