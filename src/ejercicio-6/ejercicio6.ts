export interface volar {
  fly(): void
}

export class Bird {

}

export class Sparrow extends Bird implements volar {
  fly(): void {
    console.log("Flying...");
  }
}

export class Penguin extends Bird {}