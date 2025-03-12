import { Artista } from "./artista.js";
import { Cancion } from "./cancion.js";
import { Disco } from "./dico.js";

/**
 * Interfaz que representa una biblioteca de música.
 */
export interface biblioteca {
  /**
   * Lista de artistas en la biblioteca.
   */
  artistas: Artista[],
  /**
   * Busca artistas por nombre.
   * @param nombre - Nombre del artista a buscar.
   * @returns Una lista de artistas que coinciden con el nombre.
   */
  buscarArtista(nombre: string): Artista[];
  /**
   * Busca discos por nombre.
   * @param nombre - Nombre del disco a buscar.
   * @returns Una lista de discos que coinciden con el nombre.
   */
  buscarDisco(nombre: string): Disco[];
  /**
   * Busca canciones por nombre.
   * @param nombre - Nombre de la canción a buscar.
   * @returns Una lista de canciones que coinciden con el nombre.
   */
  buscarCancion(nombre: string): Cancion[];
  /**
   * Obtiene la duración de un disco por nombre.
   * @param nombre - Nombre del disco.
   * @returns La duración del disco o undefined si no se encuentra.
   */
  duracionDisco(nombre: string): number | undefined;
  /**
   * Obtiene el número de reproducciones de un disco por nombre.
   * @param nombre - Nombre del disco.
   * @returns El número de reproducciones del disco o undefined si no se encuentra.
   */
  numeroReproduccionesDisco(nombre: string): number | undefined;
  /**
   * Obtiene el número de canciones de un disco por nombre.
   * @param nombre - Nombre del disco.
   * @returns El número de canciones del disco o undefined si no se encuentra.
   */
  numeroCancionesDisco(nombre: string): number | undefined;
}

/**
 * Clase que representa una biblioteca de música.
 */
export class Biblioteca {
  /**
   * Crea una instancia de la clase `Biblioteca`.
   * @param artistas - Lista de artistas en la biblioteca.
   */
  constructor(public readonly artistas: Artista[]) {}
}