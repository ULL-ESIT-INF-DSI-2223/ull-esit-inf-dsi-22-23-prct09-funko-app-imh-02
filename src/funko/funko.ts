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

export enum TiposFunko {
  POP = "POP!",
  POPRIDES = "POP!RIDES",
  VYNILSODA = "Vynil Soda",
  VYNILGOLD = "Vynil Gold",
}
export enum GeneroFunko {
  ANIMACION,
  PELICULAS,
  TV,
  VIDEOJUEGOS,
  DEPORTES,
  MUSICA,
  ANIME,
}
//
/**
 * Clase que representa a un Funko
 */
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
  
  setnombre(nombre: string) {
    this.nombre_ = nombre;
  }

  setTipo(tipo: TiposFunko) {
    this.tipo_ = tipo;
  }

  setDescripcion(descripcion: string) {
    this.descripcion_ = descripcion;
  }

  setGenero(genero: GeneroFunko) {
    this.genero_ = genero;
  }

  setFranquicia(franquicia: string) {
    this.franquicia_ = franquicia;
  }

  setNumeroFranquicia(numeroFranquicia: number) {
    this.numeroFranquicia_ = numeroFranquicia;
  }

  setExclusivo(excluviso: boolean) {
    this.exclusivo_ = excluviso;
  }

  setCaracteristicasEspeciales(caracteristicasEspeciales: string) {
    this.caracteristicasEspeciales_ = caracteristicasEspeciales;
  }

  setValor(valor: number ){
    this.valor_ = valor;
  }

  get id(): number {
    return this.id_;
  }

  get nombre(): string {
    return this.nombre_;
  }

  get tipo(): TiposFunko {
    return this.tipo_;
  }

  get descripcion(): string {
    return this.descripcion_;
  }

  get genero(): GeneroFunko {
    return this.genero_;
  }

  get franquicia(): string {
    return this.franquicia_;
  }

  get numeroFranquicia(): number {
    return this.numeroFranquicia_;
  }

  get exclusivo(): boolean {
    return this.exclusivo_;
  }

  get caracteristicasEspeciales(): string {
    return this.caracteristicasEspeciales_;
  }

  get valor(): number {
    return this.valor_;
  }
}
