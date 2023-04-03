# Práctica 9 - Aplicación de registro de Funko Pops

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-imh-02/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-imh-02?branch=main)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-imh-02&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-imh-02)

Ismael Martín Herrera *alu0101397375@ull.edu.es*

## Índice 

1. [Introducción](#introducción)
2. [Instalación de paquetes](#instalación-de-paquetes)
3. [Solución adoptada](#solución-adoptada)
4. [Ejercicio de modificación](#ejercicio-de-modificación)
5. [Conclusión](#conclusión)
6. [Referencias](#referencias)

## Introducción

La práctica 9 de la asignatura de DSI consiste en el desarrollo de una aplicación para el registro de Funko Pops, haciendo uso de la API síncrona de Node.js para el tratamiento del sistema de ficheros. En este sentido, los datos que maneja la aplicación permanecerán persistentes en el sistema, y con la siguiente estructura: 

- usuario1
  - funko1.json
- usuario2 
  - funko1.json
  - funko2.json

Por tanto, cada usuario tendrá su propio directorio, en el que albergará la información de cada uno de sus funkos en sus correspondientes ficheros en formato JSON. 

## Instalación de paquetes

Para la realización de esta prácticas he hecho uso de dos paquetes nuevos. Por un lado, ```yargs``` que permite la interacción con la aplicación a través de la línea de comandos. Respecto a su instalación he seguido las indicaciones del guión de la práctica: 

```
npm i yargs
npm i --save-dev @types/yargs
```

Y por otro lado, el paquete ```chalk```, para el formateo del texto mostrado por consola. En este sentido, también he seguido las indicaciones del guión de la práctica: 

```
npm i chalk
```

Finalmente, cabe destacar que en esta prácita también he realizado una serie de modificaciones y configuraciones para la total compatabilidad del código con los módulos ESM. 

## Solución adoptada

En esta práctica tal y como se indica en la introducción, se pedía el desarrollo de una aplicación para el registro de Funko Pops, cuyos datos fueran persistentes y con la posibilidad de ser usada por más de un usuario, pero no de manera simultánea. Asimismo, cabe destacar también que para la interacción con la aplicación se debe utilizar la línea de comandos, para lo que se ha utilizado el paquete ```yargs```. 

La solución que he adoptado, consiste en primer lugar, en el desarrollo de la clase ```Funko``` en base a las siguientes expectativas: 

```ts
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
    expect(harryPotter.franquicia).to.be.eql("Harry Potter");
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

  it("Setter del nombre resulta Capitan América ", () => {
    harryPotter.setnombre("Capitán América");
    expect(harryPotter.nombre).to.be.eql("Capitán América");
  });

  it("Setter del tipo resulta POPRIDES ", () => {
    harryPotter.setTipo(TiposFunko.POPRIDES);
    expect(harryPotter.tipo).to.be.eql(TiposFunko.POPRIDES);
  });

  it("Setter de la descripción resulta Personaje relevante en Marvel ", () => {
    harryPotter.setDescripcion("Personaje relevante en Marvel");
    expect(harryPotter.descripcion).to.be.eql("Personaje relevante en Marvel");
  });

  it("Setter del género resulta Animación ", () => {
    harryPotter.setGenero(GeneroFunko.ANIMACION);
    expect(harryPotter.genero).to.be.eql(GeneroFunko.ANIMACION);
  });

  it("Setter de la franquicia rresulta 'Marvel' ", () => {
    harryPotter.setFranquicia("Marvel")
    expect(harryPotter.franquicia).to.be.eql("Marvel");
  });

  it("Setter del número de franquicia resulta 2 ", () => {
    harryPotter.setNumeroFranquicia(2);
    expect(harryPotter.numeroFranquicia).to.be.eql(2);
  });

  it("Setter de exclusivo resulta true ", () => {
    harryPotter.setExclusivo(true);
    expect(harryPotter.exclusivo).to.be.eql(true);
  });

  it("Setter de las características especiales 'Tiene un escudo' ", () => {
    harryPotter.setCaracteristicasEspeciales("Tiene un escudo");
    expect(harryPotter.caracteristicasEspeciales).to.be.eql("Tiene un escudo");
  });

  it("Setter del valor devuelve 10 ", () => {
    harryPotter.setValor(10);
    expect(harryPotter.valor).to.be.eql(10);
  });

  it("Imprimir el funko ", () => {
    expect(harryPotter.imprimirFunko()).to.be.eql("ID: 1 Name: Capitán América Description: Personaje relevante en Marvel Type: POP!RIDES Genre: ANIMACION Franchise: Marvel Franchise number: 2 Exclusive: true Special features: Tiene un escudo Value: 10");
  });

  it("Imprimir un funko con valor magenta ", () => {
    const funkoMagenta = new Funko(1, "Harry Potter", "Personaje Principal de la saga Harry Potter", TiposFunko.POP, GeneroFunko.PELICULAS, "Harry Potter", 1, false, "Cabeza balancea", 40);
    expect(funkoMagenta.imprimirFunko()).to.be.eql("ID: 1 Name: Harry Potter Description: Personaje Principal de la saga Harry Potter Type: POP! Genre: PELICULAS Franchise: Harry Potter Franchise number: 1 Exclusive: false Special features: Cabeza balancea Value: 40");
  });


});
```

Esta clase permite representar toda la información de cada uno de los Funkos. 

```ts
export class Funko {
  /**
   * Constructor de un Funko
   * @param id Identificador único del funko
   * @param nombre Nombre del funko
   * @param tipo Tipo de funko Pop!, Pop! Rides, Vynil Soda o Vynil Gold
   * @param genero Género del funco (Animación, Películas, TV, videojuegos, deportes, música o anime)
   * @param franquicia Franquicia a la que pertenece por ejemplo Marvel o The Big Ban Theory
   * @param numeroFranquicia Número identificativo del Funko dentro de la franquicia correspondiente
   * @param exclusivo Verdadero en caso de que el funko sea exclusivo
   * @param caracteristicasEspeciales String indicando la característica especial
   * @param valor Valor númerico positivo en el mercado
   */
  constructor(
    private id_: number,
    private nombre_: string,
    private descripcion_: string,
    private tipo_: TiposFunko,
    private genero_: GeneroFunko,
    private franquicia_: string,
    private numeroFranquicia_: number,
    private exclusivo_: boolean,
    private caracteristicasEspeciales_: string,
    private valor_: number
  ) {}
  
  /**
   * Método para establecer el nombre de un Funko 
   * @param nombre Nombre del funko
   */
  setnombre(nombre: string) {
    this.nombre_ = nombre;
  }

  /**
   * Método para establecer el tipo de un Funko
   * @param tipo Tipo de funko Pop!, Pop! Rides, Vynil Soda o Vynil Gold
   */
  setTipo(tipo: TiposFunko) {
    this.tipo_ = tipo;
  }

  /**
   * Método para establecer la descripción de un Funko
   * @param descripcion Descripción del Funko
   */
  setDescripcion(descripcion: string) {
    this.descripcion_ = descripcion;
  }

  /**
   * Método para establecer el género de un Funko
   * @param genero Género del funco (Animación, Películas, TV, videojuegos, deportes, música o anime)
   */
  setGenero(genero: GeneroFunko) {
    this.genero_ = genero;
  }

  /**
   * Método para establecer la franquicia de un Funko
   * @param franquicia Franquicia a la que pertenece por ejemplo Marvel o The Big Ban Theory
   */
  setFranquicia(franquicia: string) {
    this.franquicia_ = franquicia;
  }

  /**
   * Método para establecer el número de franquicia de un Funko
   * @param numeroFranquicia Número identificativo del Funko dentro de la franquicia correspondiente
   */
  setNumeroFranquicia(numeroFranquicia: number) {
    this.numeroFranquicia_ = numeroFranquicia;
  }

  /**
   * Método para establecer si un Funko es exclusivo o no
   * @param excluviso Verdadero en caso de que el funko sea exclusivo
   */
  setExclusivo(excluviso: boolean) {
    this.exclusivo_ = excluviso;
  }

  /**
   * Método para establecer las características especiales de un Funko
   * @param caracteristicasEspeciales String indicando la característica especial
   */
  setCaracteristicasEspeciales(caracteristicasEspeciales: string) {
    this.caracteristicasEspeciales_ = caracteristicasEspeciales;
  }

  /**
   * Método para establecer el valor de un Funko
   * @param valor Valor númerico positivo en el mercado
   */
  setValor(valor: number ){
    this.valor_ = valor;
  }

  /**
   * Método para obtener el identificador de un Funko
   */
  get id(): number {
    return this.id_;
  }

  /**
   * Método para obtener el nombre de un Funko
   */
  get nombre(): string {
    return this.nombre_;
  }

  /**
   * Método para obtener el tipo de un Funko
   */
  get tipo(): TiposFunko {
    return this.tipo_;
  }

  /**
   * Método para obtener la descripción de un Funko
   */
  get descripcion(): string {
    return this.descripcion_;
  }

  /**
   * Método para obtener el género de un Funko
   */
  get genero(): GeneroFunko {
    return this.genero_;
  }

  /**
   * Método para obtener la franquicia de un Funko
   */
  get franquicia(): string {
    return this.franquicia_;
  }

  /**
   * Método para obtener el número de franquicia de un Funko
   */
  get numeroFranquicia(): number {
    return this.numeroFranquicia_;
  }

  /**
   * Método para obtener si un Funko es exclusivo o no
   */
  get exclusivo(): boolean {
    return this.exclusivo_;
  }

  /**
   * Método para obtener las características especiales de un Funko
   */
  get caracteristicasEspeciales(): string {
    return this.caracteristicasEspeciales_;
  }

  /**
   * Método para obtener el valor de un Funko
   */
  get valor(): number {
    return this.valor_;
  }

  /**
   * Método para obtener un objeto JSON con los datos del Funko
   * @returns Devuelve un objeto JSON con los datos del Funko
   */
  obtenerJSON() {
    const data = {
      id: this.id_,
      nombre: this.nombre_,
      descripcion: this.descripcion_,
      tipo: this.tipo_,
      genero: this.genero_,
      franquicia: this.franquicia_,
      numeroFranquicia: this.numeroFranquicia_,
      exclusivo: this.exclusivo_,
      caracteristicasEspeciales: this.caracteristicasEspeciales_,
      valor: this.valor_
    }
    return JSON.stringify(data);
  }

  /**
   * Método para imprimir por consola los datos del Funko
   * @returns Devuelve un string con los datos del Funko
   */
  imprimirFunko() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.nombre}`);
    console.log(`Description: ${this.descripcion}`);
    console.log(`Type: ${this.tipo}`);
    console.log(`Genre: ${this.genero}`);
    console.log(`Franchise: ${this.franquicia}`);
    console.log(`Franchise number: ${this.numeroFranquicia}`);
    console.log(`Exclusive: ${this.exclusivo}`);
    console.log(`Special features: ${this.caracteristicasEspeciales}`);
    const log = console.log;
    if (this.valor < 10) {
      log(chalk.red(`Value: ${this.valor}`));
    } else if (this.valor >= 10 && this.valor < 30) {
      log(chalk.blue(`Value: ${this.valor}`));
    } else if (this.valor >= 30 && this.valor < 50) {
      log(chalk.magenta(`Value: ${this.valor}`));
    } else {
      log(chalk.green(`Value: ${this.valor}`));
    }
    
    console.log("------------------------------------------");
    return "ID: " + this.id + " Name: " + this.nombre + " Description: " + this.descripcion + " Type: " + this.tipo + " Genre: " + this.genero + " Franchise: " + this.franquicia + " Franchise number: " + this.numeroFranquicia + " Exclusive: " + this.exclusivo + " Special features: " + this.caracteristicasEspeciales + " Value: " + this.valor;
  }
}
```

La clase ```Funko``` tiene una serie de propiedades que representan a dicho funko. Asimismo, respecto a los métodos de la clase cabe destacar el método ```ObtenerJSON()```, este método permite obtener una string con el Funko en formato JSON.


Además de la clase ```Funko``` también he desarrollado la clase ```FunkoCollection```. Esta clase tiene como principal objetivo gestionar la colección de funkos de un usuario. En este sentido, el constructor de la clase recibe como argumento el nombre de un usuario para el que tratará de cargar toda su información, almacenada en el sistema ficheros. En caso de no existir el usuario, se crea su correspondiente directorio. Una vez cargada toda su información, la clase tiene un serie de métodos que permiten realizar una serie de operaciones sobre la colección de Funkos: 

```ts
/**
 * Clase que representa una colección de funkos
 */
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
        console.log(chalk.green("Existe el directorio del usuario"));
        const ficherosFunkos = fs.readdirSync(path).toString().split(",");
        if (ficherosFunkos[0] !== '') {
          ficherosFunkos.forEach((funko) => {
            const data = fs.readFileSync(path + "/" + funko).toString();
            const jsonObject = JSON.parse(data);
            this.listaFunko.push(new Funko(jsonObject.id, jsonObject.nombre, jsonObject.descripcion, jsonObject.tipo, jsonObject.genero, jsonObject.franquicia, jsonObject.numeroFranquicia, jsonObject.exclusivo, jsonObject.caracteristicasEspeciales, jsonObject.valor));
          });
        }
      } else { // Si no existe el directorio del usuario lo crea
        fs.mkdirSync(path);
      }
  }

  /**
   * Método que añade un funko a la colección
   * @param newFunko Funko a añadir 
   * @returns Undefined en caso de ya existir el funko o la lista modificada en caso de añadirlo
   */
  addFunko(newFunko: Funko) {
    const path = "./db/" + this.nombreUsuario + "/" + newFunko.id + ".json";
    if(!fs.existsSync(path)) {
      fs.appendFileSync(path, newFunko.obtenerJSON());
      const jsonObject = JSON.parse(newFunko.obtenerJSON());
      this.listaFunko.push(new Funko(jsonObject.id, jsonObject.nombre, jsonObject.descripcion, jsonObject.tipo, jsonObject.genero, jsonObject.franquicia, jsonObject.numeroFranquicia, jsonObject.exclusivo, jsonObject.caracteristicasEspeciales, jsonObject.valor));
      console.log(chalk.green("Funko añadido"));
      return this.listaFunko;
    } else {
      console.log(chalk.red("Ya existe el funko con ese id"));
      return undefined;
    }

  }

  /**
   * Método que muestra un funko a partir de su id
   * @param id Id del funko a mostrar
   * @returns Undefined en caso de no existir el funko o el funko en caso de existir
   */
  getFunkoId(id: number) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      const funko = this.listaFunko.find((funko) => funko.id === id);
      funko?.imprimirFunko();
      return funko;
    } 
    console.log(chalk.red("El funko no existe"))
    return undefined;
  }

  /**
   * Método que elimina un funko a partir de su id
   * @param id Id del funko a eliminar
   * @returns Undefined en caso de no existir el funko o la lista modificada en caso de eliminarlo
   */
  eraseFunko(id: number) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      fs.rmSync(path)
      console.log(chalk.green("Funko eliminado"));
    } else {
      console.log(chalk.red("El funko no existe"));
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

  /**
   * Método que muestra todos los funkos de la colección
   * @returns Lista de funkos
   */
  getAllFunkos() {
    this.listaFunko.forEach((funko) => {
      funko.imprimirFunko();
    });
    return this.listaFunko;
  }

  /**
   * Método que modifica un funko a partir de su id
   * @param id Id del funko a modificar
   * @param modifiedFunko Funko modificado
   * @returns Undefined en caso de no existir el funko o la lista modificada en caso de modificarlo
   */
  modifyFunko(id: number, modifiedFunko: Funko) {
    const path = "./db/" + this.nombreUsuario + "/" + id + ".json";
    if(fs.existsSync(path)) {
      this.eraseFunko(id);
      this.addFunko(modifiedFunko);
      console.log(chalk.green("Funko modificado"));
      return this.listaFunko;
    } else {
      console.log(chalk.red("El funko no existe"));
      return undefined;
    }
  }
}
```

Esta clase se basa en una serie de expectativas cuyos resultados son los siguientes: 

```
  Métodos de una colección de Funkos
Funko añadido
    ✔ Añadir nuevo Funko a la colleción resulta [harryPotter,capitanAmerica, SpiderMan]
Ya existe el funko con ese id
    ✔ Añadir nuevo Funko a la colleción resulta undefined porque ya estaba
ID: 3
Name: SpiderMan
Description: Es de color azul y rojo
Type: POP!
Genre: ANIMACION
Franchise: SpiderMan
Franchise number: 3
Exclusive: false
Special features: Puede crear telas de arañas
Value: 55
------------------------------------------
    ✔ Obtener el funko con id 3 resulta SpiderMan
El funko no existe
    ✔ Obtener el funko con id 4 resulta undefined
ID: 1
Name: Harry Potter
Description: Personaje Principal de la saga Harry Potter
Type: POP!
Genre: PELICULAS
Franchise: Harry Potter
Franchise number: 1
Exclusive: false
Special features: Cabeza balancea
Value: 20
------------------------------------------
ID: 2
Name: Capitan América
Description: Tiene un escudo que le da poder
Type: POP!
Genre: PELICULAS
Franchise: Marvel
Franchise number: 1
Exclusive: false
Special features: Fuerza
Value: 5
------------------------------------------
ID: 3
Name: SpiderMan
Description: Es de color azul y rojo
Type: POP!
Genre: ANIMACION
Franchise: SpiderMan
Franchise number: 3
Exclusive: false
Special features: Puede crear telas de arañas
Value: 55
------------------------------------------
    ✔ Obtener todos los funkos resulta [harryPotter, capitanAmerica, SpiderMan]
Funko eliminado
Funko añadido
Funko modificado
    ✔ Modificar el nombre de capitaAmerica por Capitan America modificado
El funko no existe
    ✔ Modificar el funko 4 resulta undefined
Funko eliminado
    ✔ Eliminar el funko con id 2 resulta [harryPotter, SpiderMan]
El funko no existe
    ✔ Eliminar el funko con id 4 resulta undefinee
    ✔ El usuario test2 no existe se crea

```

Finalmente, para la interacción del usuario con la aplicación he desarrollado una serie de funciones de ```yargs``` cada una de ellas procesa cada uno de los comandos que permiten realizar distintas operaciones sobre la colección, y con sus correspondientes opciones. 

Por ejemplo, el caso del comando ```list```

```ts
yargs(hideBin(process.argv))
  .command('list', 'List all user Funkos', {
  user: {
   description: 'user',
   type: 'string',
   demandOption: true
  }
 }, (argv) => {
  const funkoCollection = new FunkoCollection(argv.user);
  funkoCollection.getAllFunkos();
 })
 .help()
 .argv;
```

## Ejercicio de modificación

Respecto al ejercicio de modificación a realizar en el PE el enunciado es el siguiente: 

```
    Implemente, a través del patrón Template Method, un algoritmo que permita llevar a cabo los siguientes pasos:
        - Operación de filtrado sobre una lista de números (fíjese en cómo funciona la función filter de TypeScript e implemente su operación de filtrado sin hacer uso de dicha función filter). La operación de filtrado recibe como argumento un predicado lógico que se evalúa sobre cada elemento de la lista, esto es, una función que de resultar ser verdadera para el elemento correspondiente por el que se vaya iterando, haga que dicho elemento pase a formar parte de la lista devuelta por la operación de filtrado. En caso de que el predicado sea falso, el elemento se descartará de la lista resultante.
        - Operación map sobre la lista de números resultante de la operación de filtrado (sin hacer uso del propio método map proporcionado por TypeScript). En este caso, de un modo similar a la operación filter, la operación map recibe también una función como argumento que permite transformar cada elemento de la lista de entrada aplicándole dicha función.
        - Operación reduce (sin hacer uso del propio método reduce proporcionado por TypeScript) sobre la lista resultante de haber aplicado el map. En este caso, la lista de entrada se reduce a un único número.
    En la clase base abstracta, la operación reduce debe ser abstracta (así tendremos que implementarla obligatoriamente en las subclases), mientras que las operaciones filter y map deberán proporcionar un comportamiento por defecto que podría sobreescribirse, si se deseara, en las subclases. Luego, en las subclases, que podrían ser, por ejemplo, FilterMapAddReduce, FilterMapSubReduce, FilterMapProdReduce y FilterMapDivReduce, particularice la implementación de la operación reduce según corresponda. También añada algunos métodos de enganche (hooks) entre los pasos que haya definido en su método de plantilla.
    Dado que tendrá que seguir una metodología TDD/BDD, implemente integración continua en su proyecto a través de un flujo de trabajo de GitHub Actions, esto es, con cada push realizado sobre su repositorio, ejecute las pruebas en entornos que cuenten con diferentes versiones de Node.js.
    Dado que tendrá que medir el cubrimiento de su código fuente haciendo uso de Instanbul, implemente un flujo de trabajo de GitHub Actions que envíe la información de cubrimiento generada a Coveralls con cada push llevado a cabo sobre su repositorio.
    Analice la calidad y seguridad del código fuente desarrollado mediante Sonar Cloud gracias a la implementación de un flujo de trabajo de GitHub Actions que se dispare con cada push llevado a cabo con su repositorio.
    Por último, recuerde que deberá incluir la documentación de su proyecto haciendo uso de TypeDoc.
```

En primer lugar, he desarrollado la clase abstracta ```listOperations``` con el método template ```run()```. En el método template tal y como indica el patrón de desarrollo a seguir ```template method```, es el que define las operaciones o pasos a llevar a cabo. Asimismo, en esta clase abstracta también he proporcionado un comportamiento por defecto para dos de las tres operaciones. Por un lado, el método ```filter()``` que recibe como parámetros la lista de elementos y una función de callback que se guarda como propiedad de la clase en el constructor. Y por otro lado, la operación ```map()```. Además de estos método por defecto, también he desarrollado unos méotods de enganche o ```hooks``` y el método abstracto ```reduce()```, cuya implementación es obligatorio en las subclases, esto se justifica porque las diferentes subclases a desarollar, ```FilterMapAddReduce```, ```FilterMapDivReduce```, ```FilterMapProdReduce``` y ```FilterMapSubReduce``` implementan el ```reduce()``` de una manera diferente. Puesto que, mientras que en el ```AddReduce``` se implementa como suma de los elementos del array, ```ProdReduce``` realiza una multiplicación.  

```ts
export class FilterMapAddReduce extends listOperations {
    constructor(protected NumberList: number[], protected filter_callback: (item: number) => boolean, protected callback_function_map: (item: number) => number) {
        super(NumberList, filter_callback, callback_function_map);
    }

    /**
     * Función que suma todos los elementos de una lista
     * @param list Lista de números
     * @returns Suma de todos los elementos de la lista
     */
    reduce(list: number[]) {
        let result = 0;
        list.forEach((item) => {
            result = result + item;
        });
        return result;
    } 
}
```

```ts
 export class FilterMapDivReduce extends listOperations {
    
     constructor(protected NumberList: number[], protected filter_callback: (item: number) => boolean, protected callback_function_map: (item: number) => number) {
         super(NumberList, filter_callback, callback_function_map);
     }
     
     /**
      * Función que divide todos los elementos de una lista
      * @param list Lista de números
      * @returns División de todos los elementos de la lista
      */
     reduce(list: number[]) {
         let result = 1;
         list.forEach((item) => {
             result = item / result;
         });
         return Number(result.toFixed(2));
     } 
 }
```

```ts
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
```

```ts
 export class FilterMapSubReduce extends listOperations {
     constructor(protected NumberList: number[], protected filter_callback: (item: number) => boolean, protected callback_function_map: (item: number) => number) {
         super(NumberList, filter_callback, callback_function_map);
     }
     
     /**
      * Función que resta todos los elementos de una lista
      * @param list Lista de números
      * @returns Resta de todos los elementos de la lista
      */
     reduce(list: number[]) {
         let result = 0;
         list.forEach((item) => {
            result = item - result;
         });
         return result;
     } 
 }
```

Cabe añadir que las clases que las clases desarrolladas basan su funcionamiento en una serie de expectativas cuyos resultados son los siguientes: 

```
  FilterMapAddReduce
    ✔ Método run con clientCode para addReduce resulta 18
    ✔ Método filter para addReduce resulta [2,3,4] 
    ✔ Método map para addReduce resulta [4,6,8] 
    ✔ Método reduce para addReduce resulta  
    ✔ Método afterFilter para addReduce resulta  2,3,4
    ✔ Método afterMap para addReduce resulta  4,6,8

  FilterMapDivReduce
    ✔ Método run para divReduce resulta 5.33
    ✔ Método filter para divReduce resulta [2,3,4] 
    ✔ Método map para divReduce resulta [4,6,8] 
    ✔ Método reduce para divReduce resulta  5.33
    ✔ Método afterFilter para divReduce resulta  2,3,4
    ✔ Método afterMap para divReduce resulta  4,6,8
    ✔ Método afterFilter para divReduce resulta  2,3,4
    ✔ Método afterMap para divReduce resulta  4,6,8

  FilterMapProdReduce
    ✔ Método run para prodReduce resulta 192
    ✔ Método filter para prodReduce resulta [2,3,4] 
    ✔ Método reduce para prodReduce resulta  192
    ✔ Método map para prodReduce resulta [4,6,8] 
    ✔ Método afterFilter para prodReduce resulta  2,3,4
    ✔ Método afterMap para prodReduce resulta  4,6,8

  FilterMapSubReduce
    ✔ Método run para subReduce resulta 6
    ✔ Método filter para subReduce resulta [2,3,4] 
    ✔ Método map para subReduce resulta [4,6,8] 
    ✔ Método reduce para subReduce resulta  6
```

## Conclusión 

A modo de conclusión, en esta práctica he profundizado en el uso de la API síncrona de Node.js para trabajar con el sistema de ficheros, entendiendo su funcionamiento, parámetros y el carácter síncrono de los métodos empleados. 

## Referencias

[1 Escribir ficheros JSON](https://www.tutorialkart.com/nodejs/node-js-write-json-object-to-file/)

[2 Guión de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct09-filesystem-funko-app/)
