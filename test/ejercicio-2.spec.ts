import { describe, it, expect } from 'vitest';
import { Artista } from '../src/ejercicio-2/artista';
import { Disco } from '../src/ejercicio-2/dico';
import { Cancion } from '../src/ejercicio-2/cancion';
import { DiscografiaMixta } from '../src/ejercicio-2/discografia';



// Crear algunas canciones
const cancion1 = new Cancion("Canción 1", 180, "Pop", true, 1000);
const cancion2 = new Cancion("Canción 2", 200, "Rock", false, 1500);

// Crear discos
const disco1 = new Disco("Disco 1", 2022, [cancion1, cancion2]);

// Crear artistas
const artista1 = new Artista("Artista 1", 500000, new DiscografiaMixta([disco1]));


describe('Pruebas básicas de la biblioteca', () => {

  it('Debería crear un artista correctamente', () => {
    expect(artista1.nombre).toBe("Artista 1");
    expect(artista1.oyentesMensuales).toBe(500000);
  });

  it('Debería crear un disco correctamente', () => {
    expect(disco1.nombre).toBe("Disco 1");
    expect(disco1.año).toBe(2022);
    expect(disco1.canciones.length).toBe(2);
  });

  it('Debería crear una canción correctamente', () => {
    expect(cancion1.nombre).toBe("Canción 1");
    expect(cancion1.duracion).toBe(180);
    expect(cancion1.reproducciones).toBe(1000);
  });

  it('Debería calcular correctamente la duración total de un disco', () => {
    const duracionTotal = disco1.canciones.reduce((acc, cancion) => acc + cancion.duracion, 0);
    expect(duracionTotal).toBe(380); // 180 + 200
  });

  it('Debería calcular correctamente el número total de canciones de un disco', () => {
    expect(disco1.canciones.length).toBe(2);
  });

});
