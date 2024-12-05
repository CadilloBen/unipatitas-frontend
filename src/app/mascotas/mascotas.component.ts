import { Component } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css'],
})
export class MascotasComponent {
  mascotas = [
    { id: 1, nombre: 'Rex', descripcion: 'Perro muy amigable', imagen: 'assets/rex.jpg' },
    { id: 2, nombre: 'Mimi', descripcion: 'Gata juguetona', imagen: 'assets/mimi.jpg' },
    { id: 3, nombre: 'Bobby', descripcion: 'Cachorro feliz', imagen: 'assets/bobby.jpg' },
  ];
}

