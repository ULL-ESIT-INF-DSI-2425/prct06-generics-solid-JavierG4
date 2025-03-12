import { describe, it, expect, vi } from 'vitest';
import { EmailNotifier, EmailService, SMSNotifier, ShortMessageService} from "../src/ejercicio-5/ejecicio5"

// Mock para capturar las llamadas a console.log y verificar que el contenido es el esperado
vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Notifier Tests', () => {
  it('should send email notification', () => {
    // Crear un notificador por email y enviar una notificación
    const emailNotifier = new EmailNotifier(new EmailService());
    emailNotifier.sendNotification('Hello World!');
    
    // Verificar si el mensaje de email fue enviado correctamente
    expect(console.log).toHaveBeenCalledWith('Sending notification by email: Hello World!');
  });

  it('should send SMS notification', () => {
    // Crear un notificador por SMS y enviar una notificación
    const smsNotifier = new SMSNotifier(new ShortMessageService());  // Aquí cambiamos SMSNotifier a smsNotifier
    smsNotifier.sendNotification('Hello World!');
    
    // Verificar si el mensaje de SMS fue enviado correctamente
    expect(console.log).toHaveBeenCalledWith('Sending notification by SMS: Hello World!');
  });
});