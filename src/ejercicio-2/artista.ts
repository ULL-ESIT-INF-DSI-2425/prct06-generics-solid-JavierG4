import { Disco, Single } from "./dico.js";
import { Discografia } from "./discografia.js";

/**
 * Interfaz que representa un artista.
 */
export interface artista {
  /**
   * Nombre del artista.
   */
  nombre: string,
  /**
   * Número de oyentes mensuales del artista.
   */
  oyentesMensuales: number,
  /**
   * Discografía del artista, que puede contener discos o sencillos.
   */
  discografia: Discografia<Disco | Single>
}

/**
 * Clase que implementa la interfaz `artista`.
 */
export class Artista implements artista {
  /**
   * Crea una instancia de la clase `Artista`.
   * @param  nombre - Nombre del artista.
   * @param oyentesMensuales - Número de oyentes mensuales del artista.
   * @param discografia - Discografía del artista, que puede contener discos o sencillos.
   */
  constructor(
    public readonly nombre: string,
    public readonly oyentesMensuales: number,
    public readonly discografia: Discografia<Single| Disco>
  ) {}
}