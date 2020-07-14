import { Injectable } from '@angular/core';
import { Clientes } from "./clientes/clientes";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: String = environment.apiURL + '/api/clientes';

  constructor(private http: HttpClient) { }

  salvar(cliente: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(`${this.apiURL}`,cliente);
  }

  getClientes() : Observable<Clientes[]>{
    return this.http.get<Clientes[]>(`${this.apiURL}`);
  }

  getClienteByID(id: number): Observable<Clientes>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  } 

  atualizar(cliente: Clientes): Observable<any>{
    return this.http.put<Clientes>(`${this.apiURL}/${cliente.id}`,cliente);
  }
  
  deletar(cliente: Clientes): Observable<any>{
    console.log(cliente.id)
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
