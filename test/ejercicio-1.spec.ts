import { describe, it, expect, beforeEach } from "vitest";
import { Pelicula, Peliculas } from "../src/ejercicio-1/BasicStreamableCollection.js";

/**
 * Pruebas para la clase Peliculas utilizando Vitest.
 */
describe("Peliculas", () => {
  let peliculas: Peliculas;

  beforeEach(() => {
    peliculas = new Peliculas([
      new Pelicula("Inception", 2010),
      new Pelicula("Titanic", 1997),
      new Pelicula("The Dark Knight", 2008),
    ]);
  });

  it("debería agregar una película", () => {
    const nuevaPelicula = new Pelicula("Interstellar", 2014);
    peliculas.addItem(nuevaPelicula);
    expect(peliculas.searchName("Interstellar")).toBe(nuevaPelicula);
  });

  it("debería eliminar una película", () => {
    const pelicula = peliculas.searchName("Inception");
    expect(pelicula).toBeDefined();
    peliculas.removeItem(pelicula!);
    expect(peliculas.searchName("Inception")).toBeUndefined();
  });

  it("debería buscar una película por nombre", () => {
    expect(peliculas.searchName("Titanic")?.titulo).toBe("Titanic");
  });

  it("debería buscar películas por año", () => {
    expect(peliculas.searchYear(2010)).toHaveLength(1);
    expect(peliculas.searchYear(1997)).toHaveLength(1);
    expect(peliculas.searchYear(2023)).toHaveLength(0);
  });
});
