import { Component, inject, OnInit } from '@angular/core';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { Order } from '../../interfaces/orders.interface';
import { OrdersService } from '../../services/orders/orders.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente página para listado de pedidos.
 *
 * Muestra el listado consultando el servicio OrdersService.
 */
@Component({
  selector: 'app-orders-page',
  templateUrl: './orders.page.html',
  imports: [OrdersTableComponent, AlertComponent]
})
export class OrdersPage implements OnInit {
  orders: Order[] = [];
  state: State = 'init';

  private ordersService = inject(OrdersService);

  ngOnInit(): void {
    this.state = 'loading';
    this.ordersService.getAllOrders().subscribe({
      next: (res) => {
        this.orders = res;
        this.state = 'success';
      },
      error: (err) => {
        console.error(err);
        this.state = 'error';
      }
    });
  }
}
