import { Peca } from './../models/Peca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PecaService{

  // private basePecaUrl = 'http://localhost:8080/pecas';

  // constructor(private http: HttpClient) { }

  // create(dto: any): Observable<any> {
  //   return this.http.post(`${this.basePecaUrl}/create`, dto);
  // }

  // update(id: number, dto: any): Observable<any> {
  //   return this.http.put(`${this.basePecaUrl}/${id}`, dto);
  // }

  // delete(id: number): Observable<any> {
  //   return this.http.delete(`${this.basePecaUrl}/${id}`);
  // }

  // findById(id: number): Observable<any> {
  //   return this.http.get(`${this.basePecaUrl}/${id}`);
  // }

  // findAll(): Observable<any> {
  //   return this.http.get(this.basePecaUrl);
  // }

}
