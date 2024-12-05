import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {
  mascotas = [
    { nombre: 'Bobby', tipo: 'Perro', edad: 3 },
    { nombre: 'Mimi', tipo: 'Gato', edad: 2 }
  ];
}
