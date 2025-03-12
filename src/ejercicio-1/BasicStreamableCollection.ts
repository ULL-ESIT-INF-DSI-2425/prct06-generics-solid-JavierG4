/**
 * Interfaz que define las operaciones básicas de una colección de elementos transmisibles (Streamable).
 */
export interface Streamable<T> {
  /**
   * Añade un elemento a la colección.
   * @param item - Elemento a añadir.
   */
  addItem(item: T): void;

  /**
   * Busca elementos por año de lanzamiento.
   * @param year - Año a buscar.
   * @returns Un array con los elementos encontrados o un array vacío si no hay coincidencias.
   */
  searchYear(year: number): T[];

  /**
   * Busca un elemento por nombre.
   * @param name - Nombre del elemento a buscar.
   * @returns El elemento encontrado o `undefined` si no existe.
   */
  searchName(name: string): T | undefined;

  /**
   * Elimina un elemento de la colección.
   * @param item - Elemento a eliminar.
   */
  removeItem(item: T): void;
}

/**
 * Clase abstracta que representa una colección básica de elementos transmisibles.
// Tipo de elementos dentro de la colección.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * @param items - Array que almacena los elementos de la colección.
   */
  constructor(protected items: T[]) {}

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Busca un elemento por nombre.
   * @param name - Nombre del elemento a buscar.
   * @returns El elemento encontrado o `undefined` si no existe.
   */
  abstract searchName(name: string): T | undefined;

  /**
   * Busca elementos por año de lanzamiento.
   * @param year - Año a buscar.
   * @returns Un array con los elementos encontrados o un array vacío si no hay coincidencias.
   */
  abstract searchYear(year: number): T[];
}

/**
 * Clase que representa un documental.
 */
export class Documental {
  /**
   * @param titulo - Nombre del documental.
   * @param ano - Año de lanzamiento.
   */
  constructor(public readonly titulo: string, public readonly año: number) {}
}

/**
 * Clase que representa una película.
 */
export class Pelicula {
  /**
   * @param titulo - Nombre de la película.
   * @param ano - Año de lanzamiento.
   */
  constructor(public readonly titulo: string, public readonly año: number) {}
}

/**
 * Clase que representa una colección de películas.
 */
export class Peliculas extends BasicStreamableCollection<Pelicula> {
  constructor(public readonly peliculas: Pelicula[]) {
    super(peliculas);
  }

  searchName(name: string): Pelicula | undefined {
    return this.items.find((pelicula) => pelicula.titulo === name);
  }

  searchYear(year: number): Pelicula[] {
    return this.items.filter((peli) => peli.año === year);
  }
}

/**
 * Clase que representa una serie.
 */
export class Serie {
  /**
   * @param titulo - Nombre de la serie.
   * @param ano - Año de lanzamiento.
   */
  constructor(public readonly titulo: string, public readonly año: number) {}
}
