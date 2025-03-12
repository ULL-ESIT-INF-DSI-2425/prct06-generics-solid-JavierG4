import { describe, it, expect } from 'vitest';
import { Sparrow, Penguin } from '../src/ejercicio-6/ejercicio6'; // Importa tus clases correctamente

describe('Testing Bird classes', () => {

  it('should print "Flying..." when Sparrow flies', () => {
    const sparrow = new Sparrow();

    // Redefinir console.log para capturar la salida
    let flyMessage = '';
    const log = console.log;
    console.log = (message: string) => { flyMessage = message };

    sparrow.fly();

    // Verificar que el mensaje sea el esperado
    expect(flyMessage).toBe('Flying...');

    // Restaurar el console.log
    console.log = log;
  });

  it('should be an instance of Penguin', () => {
    const penguin = new Penguin();

    // Verificar que penguin es una instancia de Penguin
    expect(penguin).toBeInstanceOf(Penguin);
  });

});

