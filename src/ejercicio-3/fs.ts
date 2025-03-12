import * as fs from "fs";

/**
 * Interfaz de almacenamiento genérica.
 */
interface IStorage {
  /**
   * Lee el contenido del almacenamiento.
   * @returns El contenido leído como una cadena de texto.
   */
  read(): string;
  /**
   * Escribe datos en el almacenamiento.
   * @param data - Los datos a escribir.
   */
  write(data: string): void;
}

/**
 * Implementación de almacenamiento en archivos.
 */
export class FileStorage implements IStorage {
  /**
   * Crea una instancia de la clase `FileStorage`.
   * @param filePath - La ruta del archivo.
   */
  constructor(private filePath: string) {}

  /**
   * Lee el contenido del archivo.
   * @returns El contenido del archivo como una cadena de texto.
   */
  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }

  /**
   * Escribe datos en el archivo.
   * @param data - Los datos a escribir.
   */
  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

/**
 * Clase independiente que usa almacenamiento externo (cumple DIP).
 */
export class FileManager {
  /**
   * Crea una instancia de la clase `FileManager`.
   * @param storage - El almacenamiento a utilizar.
   */
  constructor(private storage: IStorage) {}

  /**
   * Obtiene el contenido del almacenamiento.
   * @returns El contenido leído como una cadena de texto.
   */
  public getContent(): string {
    return this.storage.read();
  }

  /**
   * Guarda contenido en el almacenamiento.
   * @param data - Los datos a guardar.
   */
  public saveContent(data: string): void {
    this.storage.write(data);
  }
}

// Uso del sistema con almacenamiento basado en archivos
const fileStorage = new FileStorage("example.txt");
const fileManager = new FileManager(fileStorage);

// Leer contenido
console.log("Current content:", fileManager.getContent());

// Escribir nuevo contenido
fileManager.saveContent("This is new content to be written into the file.");

// Verificar contenido actualizado
console.log("Updated content:", fileManager.getContent());