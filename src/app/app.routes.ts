import { SuspensaoPadraoResolver } from './components/suspensaopadrao/resolver/suspensaopadrao-resolver';
import { SuspensaoPadraoFormComponent } from './components/suspensaopadrao/suspensaopadrao-form/suspensaopadrao-form.component';
import { SuspensaoPadraoListComponent } from './components/suspensaopadrao/suspensaopadrao-list/suspensaopadrao-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'suspensaopadrao', component: SuspensaoPadraoListComponent, title: 'Lista de Suspensoes Padrao'},
  {path: 'suspensaopadrao/new', component: SuspensaoPadraoFormComponent, title: 'Cadastro de Suspensoes Padrao'},
  {path: 'suspensaopadrao/edit/:id', component: SuspensaoPadraoFormComponent, resolve: {suspensaopadrao: SuspensaoPadraoResolver}},
];
