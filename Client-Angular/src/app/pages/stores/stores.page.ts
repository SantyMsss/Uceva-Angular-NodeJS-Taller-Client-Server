import { Component, inject, OnInit } from '@angular/core';
import { StoresTableComponent } from '../../components/stores-table/stores-table.component';
import { Store } from '../../interfaces/stores.interface';
import { StoresService } from '../../services/stores/stores.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente página para listado de tiendas.
 *
 * Muestra el listado consultando el servicio StoresService.
 */
@Component({
  selector: 'app-stores-page',
  templateUrl: './stores.page.html',
  imports: [StoresTableComponent, AlertComponent]
})
export class StoresPage implements OnInit {
  stores: Store[] = [];
  state: State = 'init';

  private storesService = inject(StoresService);

  ngOnInit(): void {
    this.state = 'loading';
    this.storesService.getAllStores().subscribe({
      next: (res) => {
        this.stores = res;
        this.state = 'success';
      },
      error: (err) => {
        console.error(err);
        this.state = 'error';
      }
    });
  }
}
