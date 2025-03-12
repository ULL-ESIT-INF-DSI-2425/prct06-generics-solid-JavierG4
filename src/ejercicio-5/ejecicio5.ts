// Clase abstracta para Notifier, que define la estructura base para las clases hijas
abstract class Notifier {
  // Constructor que define qué tipo de servicio de notificación utilizar
  constructor(protected notificationService: { notify(message: string): void }) {}

  // Método abstracto que será implementado por las clases hijas para enviar notificaciones
  abstract sendNotification(message: string): void;
}

// Clase que permite enviar notificaciones por correo electrónico
export class EmailService {
  // Método que simula el envío de una notificación por email
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Clase que permite enviar notificaciones por SMS
export class ShortMessageService {
  // Método que simula el envío de una notificación por SMS
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Clase hija de Notifier que implementa el envío de notificaciones por email
export class EmailNotifier extends Notifier {
  // Implementación concreta de sendNotification para enviar un correo electrónico
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Clase hija de Notifier que implementa el envío de notificaciones por SMS
export class SMSNotifier extends Notifier {
  // Implementación concreta de sendNotification para enviar un SMS
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
