import { Component, OnInit } from '@angular/core';
import { SuspensaoPadrao } from '../../../models/SuspensaoPadrao';
import { SuspensaoPadraoService } from '../../../services/suspensaopadrao.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PecaService } from '../../../services/peca.service';

@Component({
    selector: 'app-suspensaopadrao-list',
    standalone: true,
    imports: [NgFor, MatTableModule, MatToolbarModule, MatIconModule
      , MatButtonModule, RouterModule, FormsModule],
    templateUrl: './suspensaopadrao-list.component.html',
    styleUrl: './suspensaopadrao-list.component.css'
})
export class SuspensaoPadraoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao', 'compatibilidade', 'dadosTecnicos', 'acao',
  ];
  suspensoespadrao: SuspensaoPadrao[] = [];

  constructor(private suspensaopadraoservice: SuspensaoPadraoService, private router: Router) { }

  ngOnInit(): void {
    this.suspensaopadraoservice.findAll().subscribe(data => {
      this.suspensoespadrao = data;
    });
  }

  excluir(suspensaopadrao: SuspensaoPadrao) {
    this.suspensaopadraoservice.delete(suspensaopadrao).subscribe({
      next: () => {
        this.router.navigateByUrl('/suspensaopadrao');
        this.ngOnInit();
      },
      error: (err) => {
        console.log('Erro ao Excluir' + JSON.stringify(err));
      },
    });
  }

}



  // excluir(suspensaopadrao: any) {
  //   this.suspensaopadraoservice.delete(suspensaopadrao.id).subscribe({
  //     next: () => {
  //       // Atualizar a lista após a exclusão
  //       this.ngOnInit();
  //     },
  //     error: (err) => {
  //       console.log('Erro ao Excluir' + JSON.stringify(err));
  //     },
  //   });



  // constructor(private suspensaoPadraoService: SuspensaoPadraoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.suspensaoPadraoService.findAll().subscribe((data) => {
  //     this.suspensoespadrao = data;
  //   });
  // }

  // excluir(suspensaopadrao: SuspensaoPadrao) {
  //   this.suspensaoPadraoService.delete(suspensaopadrao).subscribe({
  //     next: () => {
  //       this.router.navigateByUrl('/suspensaopadrao');
  //       this.ngOnInit();
  //     },
  //     error: (err) => {
  //       console.log('Erro ao Excluir' + JSON.stringify(err));
  //     },
  //   });
  // }

