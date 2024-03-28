import { Injectable } from '@angular/core';
import { PecaService } from './peca.service';
import { HttpClient } from '@angular/common/http';
import { SuspensaoPadrao } from '../models/SuspensaoPadrao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuspensaoPadraoService {

  private baseUrl = 'http://localhost:8080/suspensaopadrao';

  constructor(httpClient: HttpClient, private pecaService: PecaService) {

  }

  findAll(): Observable<any[]> {
    return this.pecaService.findAll();
  }

  findById(id: string): Observable<any> {
    return this.pecaService.findById(id);
  }

  insert(suspensaoPadrao: any): Observable<any> {
    return this.pecaService.insert(suspensaoPadrao);
  }

  update(suspensaoPadrao: any): Observable<any> {
    return this.pecaService.update(suspensaoPadrao);
  }

  delete(id: string): Observable<any> {
    return this.pecaService.delete(id);
  }


}
