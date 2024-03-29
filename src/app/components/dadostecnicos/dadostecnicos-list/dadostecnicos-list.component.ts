import { Component, OnInit } from '@angular/core';
import { DadosTecnicos } from '../../../models/DadosTecnicos';
import { DadosTecnicosService } from '../../../services/dadostecnicos.service';

@Component({
  selector: 'app-dadostecnicos-list',
  standalone: true,
  imports: [],
  templateUrl: './dadostecnicos-list.component.html',
  styleUrl: './dadostecnicos-list.component.css'
})
export class DadostecnicosListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'modelo', 'fabricante', 'garantia', 'embalagem', 'peso'];
  dadostecnicos: DadosTecnicos[] = [];

  constructor(private dadostecnicosService: DadosTecnicosService) {

  }

  ngOnInit(): void {
    this.dadostecnicosService.findAll().subscribe(data => {
      this.dadostecnicos = data;
    })
  }
}
