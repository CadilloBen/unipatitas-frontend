import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // URL de tu backend en NestJS

  constructor(private http: HttpClient) {}

  // Obtener todas las mascotas
  getMascotas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mascotas`);
  }

  // Registrar usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }

  // Iniciar sesión
  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credenciales);
  }
}
