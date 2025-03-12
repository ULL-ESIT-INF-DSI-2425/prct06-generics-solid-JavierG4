import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import { FileStorage, FileManager } from '../src/ejercicio-3/fs'; // Asegúrate de que el archivo esté correctamente importado

describe('FileStorage y FileManager', () => {
  const testFilePath = './testFile.txt'; // Usamos un archivo temporal para las pruebas
  
  let fileStorage: FileStorage;
  let fileManager: FileManager;

  // Limpiar el archivo antes de cada prueba
  beforeEach(() => {
    // Se asegura que el archivo está limpio antes de cada prueba
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath); // Borra el archivo si ya existe
    }
    fileStorage = new FileStorage(testFilePath);
    fileManager = new FileManager(fileStorage);
  });

  // Limpiar después de cada prueba
  afterEach(() => {
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath); // Borra el archivo después de cada prueba
    }
  });

  it('Debería leer correctamente el contenido de un archivo vacío', () => {
    // Primero comprobamos que el archivo esté vacío
    const content = fileManager.getContent();
    expect(content).toBe('');
  });

  it('Debería escribir contenido en el archivo', () => {
    const newContent = 'Contenido de prueba';

    // Escribimos en el archivo
    fileManager.saveContent(newContent);

    // Verificamos que el contenido se haya escrito correctamente
    const content = fileManager.getContent();
    expect(content).toBe(newContent);
  });

  it('Debería sobrescribir el contenido del archivo', () => {
    const initialContent = 'Contenido inicial';
    const newContent = 'Nuevo contenido';

    // Escribimos el contenido inicial
    fileManager.saveContent(initialContent);

    // Sobrescribimos con un nuevo contenido
    fileManager.saveContent(newContent);

    // Verificamos que el archivo contenga el nuevo contenido
    const content = fileManager.getContent();
    expect(content).toBe(newContent);
  });

  it('Debería manejar errores al leer un archivo inexistente', () => {
    // Intentamos leer un archivo inexistente
    const fileStorageWithWrongPath = new FileStorage('./nonExistentFile.txt');
    const fileManagerWithWrongPath = new FileManager(fileStorageWithWrongPath);
    
    // Verificamos que la lectura de un archivo inexistente retorne una cadena vacía
    const content = fileManagerWithWrongPath.getContent();
    expect(content).toBe('');
  });

  it('Debería manejar errores al escribir en un archivo con permisos restringidos', () => {
    // Intentamos escribir en un archivo con permisos restringidos
    const restrictedFilePath = '/restricted/testFile.txt';
    const fileStorageWithRestrictedPermissions = new FileStorage(restrictedFilePath);
    const fileManagerWithRestrictedPermissions = new FileManager(fileStorageWithRestrictedPermissions);

    // Esperamos que no pueda escribir y capturemos el error
    try {
      fileManagerWithRestrictedPermissions.saveContent('Contenido');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
