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
import { Console } from "console";

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
      if (fs.existsSync(path)) {
        console.log("existe el directorio");
        const ficherosFunkos = fs.readdirSync(path).toString().split(",");
        if (ficherosFunkos[0] !== '') {
          ficherosFunkos.forEach((funko) => {
            const data = fs.readFileSync(path + "/" + funko).toString();
            const jsonObject = JSON.parse(data);
            this.listaFunko.push(new Funko(jsonObject.id, jsonObject.nombre, jsonObject.descripcion, jsonObject.tipo, jsonObject.genero, jsonObject.franquicia, jsonObject.numeroFranquicia, jsonObject.exclusivo, jsonObject.caracteristicasEspeciales, jsonObject.valor));
          });
        }
      }
  }

  addFunko(newFunko: Funko) {
    const path = "./db/" + this.nombreUsuario + "/" + newFunko.id + ".json";
    if(!fs.existsSync(path)) {
      fs.appendFileSync(path, newFunko.obtenerJSON());
      const jsonObject = JSON.parse(newFunko.obtenerJSON());
      this.listaFunko.push(new Funko(jsonObject.id, jsonObject.nombre, jsonObject.descripcion, jsonObject.tipo, jsonObject.genero, jsonObject.franquicia, jsonObject.numeroFranquicia, jsonObject.exclusivo, jsonObject.caracteristicasEspeciales, jsonObject.valor));
      console.log("Funko añadido");
    } else {
      console.log("Ya existe el funko con ese id");
    }

    return this.listaFunko;
  }

  getFunkoId(id: number) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      const funko = this.listaFunko.find((funko) => funko.id === id);
      funko?.imprimirFunko();
      return funko;
    } 
    console.log("El funko no existe")
    return undefined;
  }

  eraseFunko(id: number) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      fs.rmSync(path)
      console.log("Funko eliminado");
    } else {
      console.log("El funko no existe");
      return undefined;
    }

    const result: Funko[] = [];
    this.listaFunko.forEach((element) => {
      if (element.id !== id) {
        result.push(element);
      }
    });
    this.listaFunko = result;

    return this.listaFunko;
  }

  getAllFunkos() {
    this.listaFunko.forEach((funko) => {
      funko.imprimirFunko();
    });
    return this.listaFunko;
  }

  modifyFunko(id: number, modifiedFunko: Funko) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      this.eraseFunko(id);
      this.addFunko(modifiedFunko);
      console.log("Funko modificado");
      return this.listaFunko;
    } else {
      console.log("El funko no existe");
      return undefined;
    }
  }
}


 