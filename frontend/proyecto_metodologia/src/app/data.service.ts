import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/usuario';
  private usuariosUrl = 'http://localhost:3000/usuario'; // URL para la entidad Usuario
  private empleadoresUrl = 'http://localhost:3000/empleador'; // URL para la entidad Empleador

  constructor(private http: HttpClient) { }

  getData(): Observable<any> { 
    return this.http.get<any>(this.apiUrl); 
  }
  getUsuarios(): Observable<any> {
    return this.http.get(this.usuariosUrl);
  }

  getEmpleadores(): Observable<any> {
    return this.http.get(this.empleadoresUrl);
  }

}
