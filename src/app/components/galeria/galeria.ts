import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria implements OnInit {
  fotos = [
    'galeria/img1.jpg',
    'galeria/img2.jpg',
    'galeria/img3.jpg',
    'galeria/img4.jpg',
    'galeria/img5.jpg',
    'galeria/img6.jpg',
    'galeria/img7.jpg',
    'galeria/img8.jpg',
    'galeria/img9.jpg',
    'galeria/img10.jpg',
    'galeria/img11.jpg',
    'galeria/img12.png'
  ];

  fotosMobile: string[] = [];
  fotoSeleccionada = signal<string | null>(null);

  ngOnInit() {
    this.fotosMobile = this.elegirAlAzar(4);
  }

  private elegirAlAzar(cantidad: number): string[] {
    const copia = [...this.fotos];
    const resultado: string[] = [];
    for (let i = 0; i < cantidad && copia.length > 0; i++) {
      const indice = Math.floor(Math.random() * copia.length);
      resultado.push(copia.splice(indice, 1)[0]);
    }
    return resultado;
  }

  abrir(foto: string) {
    this.fotoSeleccionada.set(foto);
  }

  cerrar() {
    this.fotoSeleccionada.set(null);
  }
}