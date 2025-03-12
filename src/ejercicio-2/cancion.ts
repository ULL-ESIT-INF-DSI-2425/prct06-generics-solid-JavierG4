/**
 * Interfaz que representa una canción.
 */
export interface cancion {
  /**
   * Nombre de la canción.
   */
  nombre: string,
  /**
   * Duración de la canción en segundos.
   */
  duracion: number,
  /**
   * Género de la canción.
   */
  genero: string,
  /**
   * Indica si la canción es un single.
   */
  single: boolean,
  /**
   * Número de reproducciones de la canción.
   */
  reproducciones: number
}

/**
 * Clase que implementa la interfaz `cancion`.
 */
export class Cancion implements cancion {
  /**
   * Crea una instancia de la clase `Cancion`.
   * @param nombre - Nombre de la canción.
   * @param duracion - Duración de la canción en segundos.
   * @param genero - Género de la canción.
   * @param single - Indica si la canción es un single.
   * @param reproducciones - Número de reproducciones de la canción.
   */
  constructor(
    public readonly nombre: string,
    public readonly duracion: number,
    public readonly genero: string,
    public readonly single: boolean,
    public readonly reproducciones: number
  ) {}
}