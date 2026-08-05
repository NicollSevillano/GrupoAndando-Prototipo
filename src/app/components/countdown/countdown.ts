/* import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown implements OnInit, OnDestroy {
  private targetDate = new Date('2026-08-15T15:00:00');

  dias = signal(0);
  horas = signal(0);
  minutos = signal(0);
  segundos = signal(0);

  private intervalId: any;

  ngOnInit() {
    this.actualizar();
    this.intervalId = setInterval(() => this.actualizar(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private actualizar() {
    const ahora = new Date().getTime();
    const diferencia = this.targetDate.getTime() - ahora;

    if (diferencia <= 0) {
      this.dias.set(0);
      this.horas.set(0);
      this.minutos.set(0);
      this.segundos.set(0);
      return;
    }

    this.dias.set(Math.floor(diferencia / (1000 * 60 * 60 * 24)));
    this.horas.set(Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutos.set(Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)));
    this.segundos.set(Math.floor((diferencia % (1000 * 60)) / 1000));
  }
}
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown {}