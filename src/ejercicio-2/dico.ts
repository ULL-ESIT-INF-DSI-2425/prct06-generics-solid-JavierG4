import { Cancion } from "./cancion.js";

/**
 * Interfaz que representa un disco.
 */
export interface disco {
  /**
   * Nombre del disco.
   */
  nombre: string,
  /**
   * Año de lanzamiento del disco.
   */
  año: number,
  /**
   * Lista de canciones del disco.
   */
  canciones: Cancion[]
}

/**
 * Clase que implementa la interfaz `disco` para representar un disco.
 */
export class Disco implements disco {
  /**
   * Crea una instancia de la clase `Disco`.
   * @param nombre - Nombre del disco.
   * @param ano - Año de lanzamiento del disco.
   * @param canciones - Lista de canciones del disco.
   */
  constructor(
    public readonly nombre: string, 
    public readonly año: number, 
    public readonly canciones: Cancion[]
  ) {}
}

/**
 * Clase que implementa la interfaz `disco` para representar un single.
 */
export class Single implements disco {
  /**
   * Crea una instancia de la clase `Single`.
   * @param nombre - Nombre del single.
   * @param ano - Año de lanzamiento del single.
   * @param canciones - Lista de canciones del single.
   */
  constructor(
    public readonly nombre: string, 
    public readonly año: number, 
    public readonly canciones: Cancion[]
  ) {}
}