import * as fs from "fs";

// Interfaz de almacenamiento genérica
interface IStorage {
  read(): string;
  write(data: string): void;
}

// Implementación de almacenamiento en archivos
class FileStorage implements IStorage {
  constructor(private filePath: string) {}

  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }

  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

// Clase independiente que usa almacenamiento externo (cumple DIP)
class FileManager {
  constructor(private storage: IStorage) {}

  public getContent(): string {
    return this.storage.read();
  }

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
