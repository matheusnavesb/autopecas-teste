import { SuspensaoPadrao } from './../models/SuspensaoPadrao';
import { Injectable } from '@angular/core';
import { PecaService } from './peca.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuspensaoPadraoService extends PecaService {

  private baseUrl = 'http://localhost:8080/suspensaopadrao';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }


  override findAll(): Observable<SuspensaoPadrao[]> {
    return this.httpClient.get<SuspensaoPadrao[]>(this.baseUrl);
  }

  override findById(id: string): Observable<SuspensaoPadrao> {
    return this.httpClient.get<SuspensaoPadrao>(`${this.baseUrl}/${id}`);
  }

  override create(suspensaopadrao: SuspensaoPadrao): Observable<SuspensaoPadrao> {
    const data = {
      nome: suspensaopadrao.nome,
      preco: suspensaopadrao.preco,
      descricao: suspensaopadrao.descricao,
      compatibilidade: suspensaopadrao.compatibilidade,
      idDadostecnicos: suspensaopadrao.dadosTecnicos.id,
    }
    return this.httpClient.post<SuspensaoPadrao>(this.baseUrl, data);
  }

  override update(suspensaopadrao: SuspensaoPadrao): Observable<SuspensaoPadrao> {
    const data = {
      nome: suspensaopadrao.nome,
      preco: suspensaopadrao.preco,
      descricao: suspensaopadrao.descricao,
      compatibilidade: suspensaopadrao.compatibilidade,
      idDadostecnicos: suspensaopadrao.dadosTecnicos.id,
    }
    return this.httpClient.put<SuspensaoPadrao>(`${this.baseUrl}/${suspensaopadrao.id}`, data);
  }

  override delete(suspensaopadrao: SuspensaoPadrao): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${suspensaopadrao.id}`);


  }
}
