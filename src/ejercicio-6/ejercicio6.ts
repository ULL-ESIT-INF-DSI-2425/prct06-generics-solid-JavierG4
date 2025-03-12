// Interfaz que define el comportamiento de volar
export interface volar {
  fly(): void;
}

// Clase base que representa a un pájaro
export class Bird {
  // Aquí podrías agregar propiedades y métodos comunes para todos los pájaros
}

// Clase que representa un Gorrión (Sparrow) que puede volar
export class Sparrow extends Bird implements volar {
  fly(): void {
    console.log("Flying...");
  }
}

// Clase que representa un Pingüino (Penguin) que no puede volar
export class Penguin extends Bird {
  // Los pingüinos no implementan la interfaz volar, por lo que no tienen el método fly.
  // Si se quisiera, podrías agregar un método "swim" o algo que sea propio de los pingüinos
}
