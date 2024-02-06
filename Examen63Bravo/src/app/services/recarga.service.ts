import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/enviroment/enviroment';
import { Recarga } from '../domain/recarga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  constructor(private http: HttpClient) { }

  getRecargas(): Observable<Recarga[]> {
    let url = `${environment.WS_PATH}/recargas/list/`;
    return this.http.get<Recarga[]>(url);
  }
}
