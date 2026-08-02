import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Historia } from './components/historia/historia';
import { Navbar } from './components/navbar/navbar';
import { Sumate } from './components/sumate/sumate';
import { Countdown } from './components/countdown/countdown';
import { Formulario } from './components/formulario/formulario';
import { Galeria } from './components/galeria/galeria';
import { WhatsappFlotante } from './components/whatsapp-flotante/whatsapp-flotante';
import { Testimonios } from './components/testimonios/testimonios';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Historia, Navbar, Sumate, Countdown, Formulario, Galeria, WhatsappFlotante, Testimonios, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('Grupo Andando');
}