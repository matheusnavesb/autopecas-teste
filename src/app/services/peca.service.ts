import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  protected baseUrl = 'http://localhost:8080/pecas';

  constructor(protected httpClient: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  findById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  insert(peca: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, peca);
  }

  update(peca: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/${peca.id}`, peca);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }

}
