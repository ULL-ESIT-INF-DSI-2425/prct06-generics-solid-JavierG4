import { describe, expect, test, vi } from "vitest";
import { Printer, Scanner, PrinterScanner } from "../src/ejercicio-4/impresora";

describe("Printer", () => {
  test("should print", () => {
    const printer = new Printer();
    const consoleSpy = vi.spyOn(console, "log");

    printer.print();

    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
  });
});

describe("Scanner", () => {
  test("should scan", () => {
    const scanner = new Scanner();
    const consoleSpy = vi.spyOn(console, "log");

    scanner.scan();

    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });
});

describe("PrinterScanner", () => {
  test("should print and scan", () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, "log");

    printerScanner.print();
    expect(consoleSpy).toHaveBeenCalledWith("Printing...");

    printerScanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });
});