import { Disco, Single } from "./dico.js";

/**
 * Clase abstracta que representa una discografía.
 * @param T -Tipo de elementos en la discografía (Disco o Single).
 */
export abstract class Discografia<T> {
  /**
   * Crea una instancia de la clase `Discografia`.
   * @param lista - Lista de elementos en la discografía.
   */
  constructor(protected lista: T[]) {}
}

/**
 * Clase que representa una discografía de discos.
 */
export class DiscografiaDiscos extends Discografia<Disco> {
  /**
   * Crea una instancia de la clase `DiscografiaDiscos`.
   * @param discos - Lista de discos en la discografía.
   */
  constructor(public readonly discos: Disco[]) {
    super(discos);
  }
}

/**
 * Clase que representa una discografía de singles.
 */
export class DiscografiaSingle extends Discografia<Single> {
  /**
   * Crea una instancia de la clase `DiscografiaSingle`.
   * @param singles - Lista de singles en la discografía.
   */
  constructor(public readonly singles: Single[]) {
    super(singles);
  }
}

/**
 * Clase que representa una discografía mixta que puede contener discos y singles.
 */
export class DiscografiaMixta extends Discografia<Disco | Single> {
  /**
   * Crea una instancia de la clase `DiscografiaMixta`.
   * @param items - Lista de discos y singles en la discografía.
   */
  constructor(public readonly items: (Disco | Single)[]) {
    super(items);
  }
}