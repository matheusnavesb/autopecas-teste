import { Peca } from './../models/Peca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PecaService{

  private basePecaUrl = 'http://localhost:8080/pecas';

  constructor(private http: HttpClient) { }

  create(dto: any): Observable<any> {
    return this.http.post(`${this.basePecaUrl}/create`, dto);
  }

  update( dto: any, peca: Peca): Observable<any> {
    return this.http.put(`${this.basePecaUrl}`, dto);
  }

  delete(peca: Peca): Observable<any> {
    return this.http.delete(`${this.basePecaUrl}/${peca.id}`);
  }

  findById(id: string): Observable<any> {
    return this.http.get(`${this.basePecaUrl}/${id}`);
  }

  findAll(): Observable<any> {
    return this.http.get(this.basePecaUrl);
  }

}
