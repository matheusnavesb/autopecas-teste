import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosTecnicos } from '../models/DadosTecnicos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosTecnicosService {

  private baseUrl = 'http://localhost:8080/dadostecnicos'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<DadosTecnicos[]> {
    return this.httpClient.get<DadosTecnicos[]>(this.baseUrl);
  }

  findById(id: string): Observable<DadosTecnicos> {
    return this.httpClient.get<DadosTecnicos>(`${this.baseUrl}/${id}`);
  }

  insert(dadostecnicos: DadosTecnicos): Observable<DadosTecnicos> {
    return this.httpClient.post<DadosTecnicos>(this.baseUrl, dadostecnicos);
  }

  update(dadostecnicos: DadosTecnicos): Observable<DadosTecnicos> {
    return this.httpClient.put<DadosTecnicos>(`${this.baseUrl}/${dadostecnicos.id}`, dadostecnicos);
  }

  delete(dadostecnicos: DadosTecnicos): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${dadostecnicos.id}`);
  }
}
