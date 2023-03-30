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

import { Funko } from "./funko.js";
import fs, { existsSync } from 'fs';
import { TiposFunko } from "./funko.js";
import { GeneroFunko } from "./funko.js";
import { json } from "stream/consumers";

export class FunkoCollection {

  /**
   * Colleción de funkos del usuario
   */
  private listaFunko: Funko[] = []; 

  /**
   * Método constructor, a partir del nombre de usuario va a cargar todos sus funkos en una colección
   * @param nombreUsuario Nombre del usuario propiertario de la colección
   */
  constructor (private nombreUsuario: string) {
    let path = "./db/";
    path += nombreUsuario;
    try {
      if (fs.existsSync(path)) {
        console.log("existe el directorio");
        const ficherosFunkos = fs.readdirSync(path).toString().split(",");
        ficherosFunkos.forEach((funko) => {
          const data = fs.readFileSync(path + "/" + funko).toString();
          const jsonObject = JSON.parse(data);
          this.listaFunko.push(new Funko(jsonObject.id, jsonObject.nombre, jsonObject.descripcion, jsonObject.tipo, jsonObject.genero, jsonObject.franquicia, jsonObject.numeroFranquicia, jsonObject.exclusivo, jsonObject.caracteristicasEspeciales, jsonObject.valor));
        });
      }

    } catch(err) {
      console.error(err)
    }
  }

  addFunko(newFunko: Funko) {
    const path = "./db/" + this.nombreUsuario + "/" + newFunko.id + ".json";
    if(!fs.existsSync(path)) {
      fs.appendFileSync(path, newFunko.obtenerJSON());
      const jsonObject = JSON.parse(newFunko.obtenerJSON());
      this.listaFunko.push(new Funko(jsonObject.id, jsonObject.nombre, jsonObject.descripcion, jsonObject.tipo, jsonObject.genero, jsonObject.franquicia, jsonObject.numeroFranquicia, jsonObject.exclusivo, jsonObject.caracteristicasEspeciales, jsonObject.valor));
      console.log("Funko añadido");
      return "funko añadido";
    } else {
      console.log("Ya existe el funko");
    }
    return "ya existe el funko";
  }

  getFunkoId(id: number) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      const data = fs.readFileSync(path).toString();
      console.log(data);
    } else {
      console.log("El funko no existe");
    }
    return "no existe";
  }

  eraseFunko(id: number) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      fs.rmSync(path)
      console.log("Funko eliminado");
    } else {
      console.log("El funko no existe");
    }

    const result: Funko[] = [];
    this.listaFunko.forEach((element) => {
      if (element.id !== id) {
        result.push(element);
      }
    });
    this.listaFunko = result;

    return "no existe";
  }

}

const funkolist = new FunkoCollection("usu1");
const funko1 = new Funko(1, "Harry Potter", "Personaje Principal de la saga Harry Potter", TiposFunko.POP, GeneroFunko.PELICULAS, "Harry Potter", 1, false, "Cabeza balancea", 20);
funkolist.addFunko(funko1);
//funkolist.eraseFunko(1)