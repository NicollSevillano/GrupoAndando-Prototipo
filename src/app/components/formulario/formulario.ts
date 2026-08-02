import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAKE_WEBHOOK_URL } from '../../config';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nombre = '';
  contacto = '';
  whatsapp = '';
  enviado = signal(false);

  enviar() {
    fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: this.nombre,
        contacto: this.contacto,
        whatsapp: this.whatsapp,
      }),
    });

    this.enviado.set(true);
  }
}