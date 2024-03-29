import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/enviroment/enviroment';
import { Cliente } from 'src/app/domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  saveClientes(cliente: Cliente){
    let url = `${environment.WS_PATH}/clientes/`;
    return this.http.post<any>(url,cliente);
  }

  gettransferenciaRecarga(dni: string, monto: number){
    let url = `${environment.WS_PATH}/clientes/recarga?dni=${encodeURIComponent(dni)}&monto=${encodeURIComponent(monto)}`;
    return this.http.get<any>(url);
  }
}
