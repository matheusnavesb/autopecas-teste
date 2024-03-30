import { DadosTecnicos } from './../../../models/DadosTecnicos';
import { SuspensaoPadrao } from './../../../models/SuspensaoPadrao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuspensaoPadraoService } from '../../../services/suspensaopadrao.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { DadosTecnicosService } from '../../../services/dadostecnicos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-suspensaopadrao-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatButtonModule,
    MatCardModule, MatToolbarModule, RouterModule],
  templateUrl: './suspensaopadrao-form.component.html',
  styleUrl: './suspensaopadrao-form.component.css'
})
export class SuspensaoPadraoFormComponent implements OnInit {

  formGroup: FormGroup;
  dadostecnicoss: DadosTecnicos[] = [];

  constructor(private formBuilder: FormBuilder,
    private suspensaopadraoService: SuspensaoPadraoService,
    private dadostecnicosService: DadosTecnicosService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

      const suspensaopadrao: SuspensaoPadrao = activatedRoute.snapshot.data['suspensaopadrao'];

      this.formGroup = formBuilder.group({
        id: [(suspensaopadrao && suspensaopadrao.id) ? suspensaopadrao.id : null],
        nome: [(suspensaopadrao && suspensaopadrao.nome) ? suspensaopadrao.nome : '', Validators.required],
        descricao: [(suspensaopadrao && suspensaopadrao.descricao) ? suspensaopadrao.descricao : '', Validators.required],
        compatibilidade: [(suspensaopadrao && suspensaopadrao.compatibilidade) ? suspensaopadrao.compatibilidade : '', Validators.required],
        dadostecnicos: [(null)]

      })
    }

    ngOnInit(): void {
      this.dadostecnicosService.findAll().subscribe(data => {
        this.dadostecnicoss = data;
        this.initializeForm();
      });
    }

    initializeForm(): void {
      const suspensaopadrao: SuspensaoPadrao = this.activatedRoute.snapshot.data['suspensaopadrao'];

      // selecionando o dadostecnicos
      const dadostecnicos = this.dadostecnicoss.find(dadostecnicos => dadostecnicos.id === (suspensaopadrao?.dadosTecnicos?.id || null));

      this.formGroup = this.formBuilder.group({
        id: [(suspensaopadrao && suspensaopadrao.id) ? suspensaopadrao.id : null],
        nome: [(suspensaopadrao && suspensaopadrao.nome) ? suspensaopadrao.nome : '', Validators.required],
        descricao: [(suspensaopadrao && suspensaopadrao.descricao) ? suspensaopadrao.descricao : '', Validators.required],
        compatibilidade: [(suspensaopadrao && suspensaopadrao.compatibilidade) ? suspensaopadrao.compatibilidade : '', Validators.required],
        dadostecnicos: [dadostecnicos]
      });
    }



    salvar() {
      if (this.formGroup.valid) {
        const suspensaopadrao = this.formGroup.value;
        if (suspensaopadrao.id == null) {
          this.suspensaopadraoService.create(suspensaopadrao).subscribe({
            next: (suspensaopadraoCadastrado) => {
              this.router.navigateByUrl('/suspensaopadrao');
            },
            error: (err) => {
              console.log('Erro ao Incluir' + JSON.stringify(err));
            }
          });
        } else {
          this.suspensaopadraoService.update(suspensaopadrao).subscribe({
            next: (suspensaopadraoAlterado) => {
              this.router.navigateByUrl('/suspensaopadrao');
            },
            error: (err) => {
              console.log('Erro ao Editar' + JSON.stringify(err));
            }
          });
        }
      }
    }

    excluir() {
      if (this.formGroup.valid) {
        const suspensaopadrao = this.formGroup.value;
        if (suspensaopadrao.id != null) {
          this.suspensaopadraoService.delete(suspensaopadrao).subscribe({
            next: () => {
              this.router.navigateByUrl('/suspensaopadrao');
            },
            error: (err) => {
              console.log('Erro ao Excluir' + JSON.stringify(err));
            }
          });
        }
      }
    }
}
