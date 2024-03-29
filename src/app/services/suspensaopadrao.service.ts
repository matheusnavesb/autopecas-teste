import { SuspensaoPadrao } from './../models/SuspensaoPadrao';
import { Injectable } from '@angular/core';
import { PecaService } from './peca.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuspensaoPadraoService {

  private baseUrl = 'http://localhost:8080/suspensaopadrao';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<SuspensaoPadrao[]> {
    return this.httpClient.get<SuspensaoPadrao[]>(this.baseUrl);
  }

  findById(id: string): Observable<SuspensaoPadrao> {
    return this.httpClient.get<SuspensaoPadrao>(`${this.baseUrl}/${id}`);
  }

  insert(suspensaopadrao: SuspensaoPadrao): Observable<SuspensaoPadrao> {
    return this.httpClient.post<SuspensaoPadrao>(this.baseUrl, suspensaopadrao);
  }

  update(suspensaopadrao: SuspensaoPadrao): Observable<SuspensaoPadrao> {
    return this.httpClient.put<SuspensaoPadrao>(`${this.baseUrl}/${suspensaopadrao.id}`, suspensaopadrao);
  }

  delete(suspensaopadrao: SuspensaoPadrao): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${suspensaopadrao.id}`);


  }
}
