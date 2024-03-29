import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { SuspensaoPadrao } from './../../../models/SuspensaoPadrao';
import { SuspensaoPadraoService } from '../../../services/suspensaopadrao.service';
import { inject } from '@angular/core';


export const SuspensaoPadraoResolver: ResolveFn<SuspensaoPadrao> = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(SuspensaoPadraoService).findById(route.paramMap.get('id')!);
};
