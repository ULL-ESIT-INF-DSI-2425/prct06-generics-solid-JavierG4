/**
 * Interfaz que representa un objeto imprimible.
 */
interface Printable {
  /**
   * Imprime el contenido.
   */
  print(): void;
}

/**
 * Interfaz que representa un objeto escaneable.
 */
interface Scannable {
  /**
   * Escanea el contenido.
   */
  scan(): void;
}

/**
 * Clase que implementa la interfaz `Printable` para representar una impresora.
 */
export class Printer implements Printable {
  /**
   * Imprime el contenido.
   */
  print(): void {
    console.log('Printing...');
  }
}

/**
 * Clase que implementa la interfaz `Scannable` para representar un escáner.
 */
export class Scanner implements Scannable {
  /**
   * Escanea el contenido.
   */
  scan(): void {
    console.log('Scanning...');
  }
}

/**
 * Clase que implementa las interfaces `Printable` y `Scannable` para representar una impresora-escáner.
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Imprime el contenido.
   */
  print(): void {
    console.log('Printing...');
  }

  /**
   * Escanea el contenido.
   */
  scan(): void {
    console.log('Scanning...');
  }
}
